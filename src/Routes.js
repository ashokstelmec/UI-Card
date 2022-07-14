import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

/* <Route path="/" element={<App />}>
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<CardDescription />} />
        <Route path="/card1" element={<CardOne />} />
        <Route path="/card2" element={<CardTwo />} />
        <Route path="/card3" element={<CardThree />} />
        <Route path="/card4" element={<CardFour />} />
        <Route path="/card5" element={<CardFive />} />
        <Route path="/card6" element={<CardSix />} />
        <Route path="/card7" element={<CardSeven />} />
        <Route path="/card8" element={<CardEight />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;

// You can think of these components as "pages"
// in your app.

function CardDescription() {
  return (
    <div className="card-description">
      <h2>It is Card Detail</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardOne() {
  return (
    <div className="card-description">
      <h2>Card One</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardTwo() {
  return (
    <div className="card-description">
      <h2>This is Second Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardThree() {
  return (
    <div className="card-description">
      <h2>This is Third Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardFour() {
  return (
    <div className="card-description">
      <h2>This is Fourth Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardFive() {
  return (
    <div className="card-description">
      <h2>This is Fifth Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardSix() {
  return (
    <div className="card-description">
      <h2>This is Sixth Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardSeven() {
  return (
    <div className="card-description">
      <h2>This is Seventh Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}

function CardEight() {
  return (
    <div className="card-description">
      <h2>This is Eight Card</h2>
      <button>
        <a href="/">Go Back</a>
      </button>
    </div>
  );
}
