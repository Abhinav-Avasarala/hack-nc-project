import dbClient from '../middleware/dbConfig.js';



// export const insertOpportunity = async (req, res) => {

//     const { type, title, description, location, start_date, end_date, deadline, image_url, organization } = req.body;

//     try {
//         const result = await dbClient.query(
//             `INSERT INTO opportunities (type, title, description, location, start_date, end_date, deadline, image_url, organization)
//              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//              RETURNING *`,
//             [type, title, description, location, start_date, end_date, deadline, image_url, organization]
//         );

//         res.status(201).json({ message: 'Opportunity added successfully!', opportunity: result.rows[0] });
//     } catch (error) {
//         console.error('Error inserting opportunity:', error);
//         res.status(500).json({ message: 'Server error' });
//     }

// }



export const linkUserWithInterest = async (req, res) => {
    const { user_name, interest_name } = req.body; // Expecting interest_name instead of interest_id

    try {
        // Step 1: Get the interest_id from the Interests table
        let interestResult = await dbClient.query(
            `SELECT * FROM Interests WHERE Name ILIKE $1`,
            [interest_name]
        );

        if (interestResult.rows.length === 0) {
            const res = await dbClient.query(
            "INSERT INTO Interests (Name) VALUES ($1) RETURNING *"
            , [interest_name]);
            console.log('Interest added:', interest_name);
            interestResult = await dbClient.query(
                `SELECT * FROM Interests WHERE Name ILIKE $1`,
                [interest_name]
            );
        }

        const interest_id = interestResult.rows[0].id;

        const userIdResult = await dbClient.query(
            `SELECT * FROM Users WHERE username = $1`,
            [user_name]
        );

        if (userIdResult.rows.length === 0) {
            console.log("User not found");
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