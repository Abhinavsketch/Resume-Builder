import { OpenAI } from "openai/client.js";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

const convertBullet = async (userDescription, type) => {
  const prompt =
    type === "description"
      ? "Convert these user description into 4-6 points for the resume according to the user description and also tell the use of technologies with it like if pdf making puppeteer is used like this"
      : "This is certificate description mention stuff like what i learn and important info like this in one paragaph don't make too large just 1-2 line";
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: userDescription,
      },
    ],
    model: "gpt-4o",
  });
  const apiResponse = completion.choices[0].message.content;
  const pointsArray = apiResponse
    .split(/\n+/)
    .map((line) => line.replace(/^\d+\.\s*/, "").trim())
    .filter((line) => line.length > 0);
  return pointsArray;
};

export default convertBullet;
