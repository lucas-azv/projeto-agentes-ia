import { useState } from 'react';
import { generateResponse } from '../services/api';

function InputForm({ onNewResponse }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const responseData = await generateResponse(inputText);
    if (responseData && responseData.candidates && responseData.candidates[0] && responseData.candidates[0].content && responseData.candidates[0].content.parts && responseData.candidates[0].content.parts[0] && responseData.candidates[0].content.parts[0].text) {
      onNewResponse(responseData.candidates[0].content.parts[0].text);
    } else {
      onNewResponse('Erro ao obter resposta.');
    }
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Digite algo..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InputForm;