import dbClient from '../middleware/dbConfig.js';

export const getAllOrgs = async (req, res) => {
    try {
        const result = await dbClient.query(
            'SELECT * FROM organizations'
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No organizations found.' });
        } else {
            res.json(result.rows);
        }

    } catch(err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}
export const getAllEvents = async (req, res)=> {
    try {
        const result = await dbClient.query(
            'SELECT * FROM opportunities'
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No opportunities found for this location.' });
        } else {
            res.json(result.rows);
        }

    } catch(err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

export const getByLocation = async (req, res) => {
  const { location } = req.query; // Ensure the frontend sends `location` in the body
  try {
    const result = await dbClient.query(
      'SELECT * FROM opportunities WHERE location ILIKE $1', // Use parameterized queries
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


// export const getFromDate = async(req, res) => {
//     const { startDate, endDate } = req.body;

//     try {
//         const result = await dbClient.query(
//             "SELECT * FROM opportunities WHERE start_date <= $2 AND end_date >= $1", 
//             [startDate, endDate]
//         );

//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: 'No opportunities found within the specified date range.' });
//         } else {
//             res.json(result.rows);
//         }
//     } catch (err) {
//         console.error('Database query error:', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }


export const getByOrganizationName = async(req, res) => {
    const { org } = req.query;

    const result = await dbClient.query(
        "SELECT o.Id, o.Type, o.Title, o.Location, o.Start_date, o.End_date, o.Deadline " +
        "FROM Opportunities o " +
        "JOIN Organizations org ON o.Org_id = org.Id " +
        "WHERE org.Name ILIKE $1", [org]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this organization.' });
    } else {
        res.json(result.rows);
    }
}

export const getBySearch = async(req, res) => {
    const {searchTerm} = req.query;
    console.log(searchTerm);
    const result = await dbClient.query(
      'SELECT * FROM opportunities WHERE description ILIKE $1',
      ['%' + searchTerm + '%'] // string concatenation
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'No opportunities found for this search.' });
    } else {
        res.json(result.rows);
    }

}

export const getByUser = async (req, res) => {
  const { userId } = req.body; // Assuming userId is provided as a URL parameter

  try {
      const result = await dbClient.query(
          `SELECT DISTINCT o.* 
          FROM Opportunities o
          JOIN Opportunity_Tags ot ON o.Id = ot.Opportunity_id
          JOIN User_Interests ui ON ot.Interest_id = ui.Interest_id
          WHERE ui.User_id = $1`,
          [userId] // Use the provided userId
      );

      if (result.rows.length === 0) {
          return res.status(404).json({ message: 'No opportunities found for this user.' });
      } else {
          res.json(result.rows);
      }
  } catch (error) {
      console.error('Error fetching opportunities:', error);
      res.status(500).json({ message: 'Server error' });
  }
};


// export const registerUser = async(req, res) => {
//     const {username, name, email, password, major} = req.body;

//     const newUser = await db.one(
//         'INSERT INTO users (username, name, email, password, major) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//         [username, name, email, password, major]
//     );

// }