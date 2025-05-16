import { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';

function App() {
  const [response, setResponse] = useState('');

  const handleNewResponse = (newResponse) => {
    setResponse(newResponse);
  };

  return (
    <div>
      <h1>Aplicação React com Gemini</h1>
      <InputForm onNewResponse={handleNewResponse} />
      <OutputDisplay response={response} />
    </div>
  );
}

export default App;