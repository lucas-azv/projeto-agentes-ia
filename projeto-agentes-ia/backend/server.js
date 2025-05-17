import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // Para poder receber dados no formato JSON

app.post('/api/generate', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const inputText = req.body.text; // Assumindo que o frontend envia { text: "..." }

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseMimeType: 'text/plain',
  };

  const data = {
    generationConfig,
    contents: [
      {
        role: 'user',
        parts: [{ text: inputText }],
      },
    ],
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-preview-05-06:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    res.json(jsonResponse);
  } catch (error) {
    console.error('Erro ao chamar a API Gemini:', error);
    res.status(500).json({ error: 'Erro ao gerar resposta' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});