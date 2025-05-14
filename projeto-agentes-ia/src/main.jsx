import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleGenAI } from "@google/genai";
import './index.css'
import App from './App.jsx'

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
