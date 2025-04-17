// server.js (or your main backend file)
import express from "express";
import bodyParser from "body-parser";
import { GoogleGenAI } from "@google/genai";
import cors from "cors"; // For handling Cross-Origin Requests (important for local development)
import dotenv from "dotenv";
import morgan from "morgan";
const app = express();
// Choose a port for your backend
dotenv.config();
app.use(cors()); // Enable CORS for local development
app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use(morgan("dev"));
const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });
const modelName = "gemini-2.0-flash";

app.post("/api/generate-ai-response", async (req, res) => {
  try {
    const userPrompt = req.body.prompt; // Get the prompt from the request body

    if (!userPrompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents: userPrompt,
    });

    res.json({ response: response.text }); // Send the AI response back as JSON
  } catch (error) {
    console.error("Error generating AI response:", error);
    res.status(500).json({ error: "Failed to generate AI response" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
