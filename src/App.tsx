import React from 'react';
import './App.css';

import Beer from './Componentes/Beer';
import Foods from './Componentes/Foods';


function App() {
  return (
    <div className="App">
      <Foods />
      <Beer />
    </div>
  );
}


export default App;