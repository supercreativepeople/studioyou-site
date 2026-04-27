const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const adminSecret = process.env.ADMIN_SECRET;

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Only POST allowed
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, error: 'Method not allowed' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    
    // Check admin secret
    if (body.secret !== adminSecret) {
      return {
        statusCode: 403,
        headers,
        body: JSON.stringify({ success: false, error: 'Invalid secret' })
      };
    }

    // Initialize Supabase
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Query formations table
    const { data, error } = await supabase
      .from('formations')
      .select('email, first_name, last_name, studio_name, updated_at')
      .order('updated_at', { ascending: false });

    if (error) {
      throw error;
    }

    const users = data.map(user => ({
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      studioName: user.studio_name,
      updatedAt: user.updated_at
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, users })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      })
    };
  }
};
