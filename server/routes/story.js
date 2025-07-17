const express = require("express");
const router = express.Router();
require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1", // Important!
});

console.log("🔑 Loaded API Key:", process.env.OPENAI_API_KEY?.slice(0, 10) + "...");


router.post("/", async (req, res) => {
  console.log("🛬 Incoming POST /api/story hit");

  try {
    console.log("📦 req.body:", req.body); // Show full body
    const genre = req.body?.genre; // ✅ SAFE: No crash

    console.log("🎯 Genre received:", genre);

    if (!genre || typeof genre !== "string" || genre.trim() === "") {
      return res.status(400).json({ error: "Genre is missing or invalid" });
    }

    const prompt = `Write a short, creative ${genre.toLowerCase()} story for kids. Keep it engaging and appropriate for children.`;

    const response = await openai.chat.completions.create({
 model: "mistralai/mistral-7b-instruct",


      messages: [
        {
          role: "system",
          content:
            "You are a creative storyteller who writes engaging stories for children.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 200,
    });

    const story = response.choices?.[0]?.message?.content?.trim();
    console.log("✅ Story generated successfully");

    if (!story) {
      return res.status(500).json({ error: "No story returned from OpenAI." });
    }

    return res.json({ story });
  } catch (err) {
    console.error("🔥 Caught error:", err);
    return res.status(500).json({
      error: "Something went wrong",
      details: err.message,
    });
  }
});

module.exports = router;
