import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Simulator from './components/Simulator';

function App() {
  return (
    <div className="App">
      <Simulator />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
