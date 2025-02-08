import env from 'dotenv';
import OpenAI from 'openai';

env.config();

const openai = new OpenAI({
    apiKey: process.env.KEY,
});

export const getResponse = async (userInput) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `Given the input, give me as many keywords that would best fit the users interests as one string seperated by commas with no spaces.
                    For example, if the input is about a student who is interested in computer science, an output may be software engineering, artificial intelligence, data science, hackathons.
                    The input is: ${userInput}`
                }
            ]
        });

        const parsedResponse = response.choices[0].message.content;
        console.log(parsedResponse);
        // try {
        //     // Attempt to parse as JSON directly
        //     return JSON.parse(parsedResponse);
        // } catch (parsingError) {
        //     // If direct parsing fails, clean the response
        //     parsedResponse = parsedResponse.trim();
        //     const jsonStart = parsedResponse.indexOf('{');
        //     const jsonEnd = parsedResponse.lastIndexOf('}');
        //     if (jsonStart !== -1 && jsonEnd !== -1) {
        //         const jsonString = parsedResponse.substring(jsonStart, jsonEnd + 1);
        //         return JSON.parse(jsonString);
        //     } else {
        //         throw new Error("Invalid JSON format in AI response.");
        //     }
        // }
        
    } catch (error) {
        console.error("Error fetching response:", error);
    }


};

getResponse("I am a junior majoring in Computer Science, with a strong passion for software development, artificial intelligence, and web development. I enjoy participating in hackathons and have developed skills in Java, Python, HTML/CSS, JavaScript, and SQL. Outside of my academic work, I am an active member of the university’s coding club and volunteer as a tutor for introductory programming courses. My goal is to work as a software engineer specializing in AI solutions and contribute to open-source projects in the future.");
