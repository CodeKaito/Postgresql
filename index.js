const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env'),
});

const { Pool } = require('pg');

const pool = new Pool({
  user: 'kaito',
  password: '060697',
  host: '192.168.1.21',
  port: 5432,
  database: 'people',
});

pool.query('SELECT current_user', (error, result) => {
  if (error) {
    console.error('Error executing query:', error);
  } else {
    const current_user = result.rows[0]['current_user'];
    console.log('Current user:', current_user);
  }

  // Don't forget to release the client back to the pool
  pool.end();
});
