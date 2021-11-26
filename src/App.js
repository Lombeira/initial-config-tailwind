import React from 'react';
import TaskList from './TaskList';

import './index.css';

function App() {
  return (
    <div className="App">
      <h3 className="title">TailwindCSS BoilerPlate</h3>
      <h4 className="white-title">Craco, autoprefixer and JIT enabled</h4>
      <TaskList />
      <h5 className="white-title">USE WISELY</h5>
    </div>
  );
}

export default App;
