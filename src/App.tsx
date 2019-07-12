import React from 'react';
import { Router, View } from 'react-navi';
import { routes } from './routes';
import { Navigation } from './Navigation';
import './App.css';

const App: React.FC = () => {
  return (
    <Router routes={routes}>
      <div className="App">
        <Navigation />
        <View />
      </div>
    </Router>
  );
};

export default App;
