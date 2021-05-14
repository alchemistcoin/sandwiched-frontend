import React from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import StyledHeader from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <StyledHeader />
      <LandingPage />

    </div>
  );
}

export default App;
