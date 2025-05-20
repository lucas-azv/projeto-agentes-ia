import express from 'express';
import { runChat } from '../services/geminiService.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const userInput = req.body?.text;  // OK, está pegando "text" do body
    console.log('incoming /chat req', userInput);
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    // Aqui precisa passar o API_KEY para o runChat!
    // Pode pegar da env aqui ou passar por parâmetro do server.js
    const API_KEY = process.env.API_KEY;

    const response = await runChat(API_KEY, userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
