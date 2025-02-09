import dbClient from '../middleware/dbConfig.js';


export const linkUserWithInterest = async (req, res) => {
    const { user_name, interest_name } = req.body; // Expecting interest_name instead of interest_id

    try {
        // Step 1: Get the interest_id from the Interests table
        const interestResult = await dbClient.query(
            `SELECT * FROM Interests WHERE Name = $1`,
            [interest_name]
        );

        if (interestResult.rows.length === 0) {
            return res.status(201).json({ message: 'Interest not found.' });
        }

        const interest_id = interestResult.rows[0].id;

        const userIdResult = await dbClient.query(
            `SELECT * FROM Users WHERE Name = $1`,
            [user_name]
        );

        if (userIdResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const user_id = userIdResult.rows[0].id;

        // Step 2: Insert the user-interest link into User_Interests
        const result = await dbClient.query(
            `INSERT INTO User_Interests (User_id, Interest_id)
             VALUES ($1, $2)
             RETURNING *`,
            [user_id, interest_id]
        );

        res.status(201).json({ message: 'User linked with interest successfully!', link: result.rows[0] });
    } catch (error) {
        console.error('Error linking user with interest:', error);
        res.status(500).json({ message: 'Server error' });
    }
};