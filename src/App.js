import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function App() {
  const [count, setCount] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  
  return (
    <div className="App">
        <ButtonGroup orientation="vertical" aria-label="outlined primary button group">
          <Button onClick={() => setCount(count + 1)} disabled = {isDisable} >CLICK:{count}</Button>
          <Button onClick={() => setCount(0)}>CLEAR</Button>
          <Button onClick={() => setIsDisable(!isDisable)}>{isDisable ? 'able' : 'disable'}</Button>
        </ButtonGroup>
    </div>
  );
}

export default App;
