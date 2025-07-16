const express = require('express');
const OpenAI = require('openai');

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/', async (req, res) => {
  const { genre } = req.body;
  const prompt = `Write a short, creative ${genre.toLowerCase()} story for kids.`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a creative storyteller.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 300
    });

    const story = response.choices[0].message.content.trim();
    res.json({ story });
  } catch (err) {
    console.error('Error generating story:', err);
    res.status(500).json({ error: 'Failed to generate story' });
  }
});

module.exports = router;
