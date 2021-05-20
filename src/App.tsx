import React from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import StyledHeader from "./components/Header/Header";
import backgroundSvg from "./assets/background.svg"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundSvg})`, backgroundSize: "cover", height: "100%" }}>
      {/* Router */}
      <Router>
        {/* Header */}
        <StyledHeader />
        <Switch>
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/:walletAddress">
            <ResultsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// TODO 1: Replace with real results page once implemented
function ResultsPage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    // @ts-ignore
  let { walletAddress } = useParams();
    return (
      <div>
        <h3>Wallet Address: {walletAddress}</h3>
      </div>
    );
  }

export default App;
