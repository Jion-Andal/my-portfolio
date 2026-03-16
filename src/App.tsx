import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
