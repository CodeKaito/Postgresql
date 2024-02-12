const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env'),
});

const { Pool, Client} = require('pg');

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    databse: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

(async () => {
    const client = await pool.connect();
    try {
        const rep = await client.query('SELECT current_user');
        const current_user = row[0]['current_user'];
        console.log(current_user);
    } catch (error) {
       console.log(error); 
    } finally {
        client.release();
    }
})();