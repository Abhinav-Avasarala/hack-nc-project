import pkg from 'pg';
import express from 'express';
import env from 'dotenv';

const dbClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}); 


dbClient
  .connect()
  .then(() => console.log('Database connected'));


export const getByLocation = async(req, res) => {
    const {location} = req.query;

    const result = await dbClient.query(
        'SELECT * FROM opportunities WHERE location =' + location
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this location.' });
    } else {
        res.json(result.rows);
    }
}

export const getFromDate = async(req, res) => {
    const {startDate, endDate } = req.query;

    const result = await dbClient.query(
        'SELECT * FROM opportunities WHERE start_date  <=' + startDate + 'AND end_date >=' + endDate
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this location.' });
    } else {
        res.json(result.rows);
    }
}


export const getByOrganizationName = async(req, res) => {
    const {org} = req.query;

    const result = await dbClient.query(
        'SELECT o.* FROM opportunities o JOIN organization org ON o.org_id = id WHERE org.name =' + org
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this location.' });
    } else {
        res.json(result.rows);
    }
}