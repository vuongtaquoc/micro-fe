import React from 'react';

import Card from './components/Card';

import './App.css';

const App = () => {
  const reactVersion = require('../package.json').dependencies['react'];

  return (
    <div className="content" role="main">
      <Card name="Shareable Components" />

      <h2>Resources</h2>
      <p>React version: {reactVersion}</p>
    </div>
  );
};

export default App;
