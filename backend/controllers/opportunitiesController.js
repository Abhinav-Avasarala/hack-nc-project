import dbClient from '../middleware/dbConfig.js';

export const getByLocation = async (req, res) => {
  const { location } = req.body; // Ensure the frontend sends `location` in the body
  try {
    const result = await dbClient.query(
      'SELECT * FROM opportunities WHERE location = $1', // Use parameterized queries
      [location]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No opportunities found for this location.' });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getFromDate = async(req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const result = await dbClient.query(
            "SELECT * FROM opportunities WHERE start_date <= $2 AND end_date >= $1", 
            [startDate, endDate]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No opportunities found within the specified date range.' });
        } else {
            res.json(result.rows);
        }
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const getByOrganizationName = async(req, res) => {
    const { org } = req.body;

    const result = await dbClient.query(
        "SELECT o.Id, o.Type, o.Title, o.Location, o.Start_date, o.End_date, o.Deadline " +
        "FROM Opportunities o " +
        "JOIN Organizations org ON o.Org_id = org.Id " +
        "WHERE org.Name = $1", [org]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this organization.' });
    } else {
        res.json(result.rows);
    }
}
