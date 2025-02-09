import env from 'dotenv';
import OpenAI from 'openai';

env.config();

const openai = new OpenAI({
    apiKey: process.env.KEY,
});


export const getResponse = async (req, res) => {
    
    try {
        // Extract the user's input from the request body
        const { userInput } = req.query.userInput;
        
        console.log("input:" + userInput);
        // Make a request to the OpenAI API
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: `Given the input, give me as many keywords that would best fit the user's interests as one string separated by commas with no spaces. Generate as many key words as possible (max of 15).
              For example, if a student types "I am Computer Science major, interested in AI & ML, I want to get into AI research and LLM research.", the output should be something like "Computer Science, AI & ML, AI research, LLM research, Programming, Coding, AI conferences".
              The input is: ${userInput}`   
            }
          ],
        });
    
        // Parse the response
        const parsedResponse = response.choices[0].message.content;
        const arrayOfTags = parsedResponse.split(",");
    
        // Return the array of tags as a JSON response
        return res.status(200).json({ tags: arrayOfTags });
      } catch (error) {
        console.error("Error fetching response:", error);
        return res.status(500).json({ error: 'Internal server error.' });
      }


};

// getResponse("I am a junior majoring in Computer Science, with a strong passion for software development, artificial intelligence, and web development. I enjoy participating in hackathons and have developed skills in Java, Python, HTML/CSS, JavaScript, and SQL. Outside of my academic work, I am an active member of the university’s coding club and volunteer as a tutor for introductory programming courses. My goal is to work as a software engineer specializing in AI solutions and contribute to open-source projects in the future.");
