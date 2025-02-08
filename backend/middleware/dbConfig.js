import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
const { Client } = pkg;

// Create a shared database client
const dbClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

dbClient
  .connect()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Connection error', err.stack));

export default dbClient;
