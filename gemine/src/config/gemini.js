// const apiKey = process.env.API_KEY;

// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.

import { GoogleGenAI } from "@google/genai";
const apiKey = "AIzaSyCn7g8_0sk4omo41mTf0THk5_DLD1uzlkk";

const ai = new GoogleGenAI({ apiKey: apiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

export default main();
