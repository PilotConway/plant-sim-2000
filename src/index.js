import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';

import './styles.css';

function App() {
  const [gameState, setGameState] = React.useState('ready');
  return (
    <div className="App">
      <h1>Welcome to Plant Sim 2000</h1>
      <Button variant="contained" color="primary">
        Let's Plant!
      </Button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
