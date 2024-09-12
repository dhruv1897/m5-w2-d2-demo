import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Changed from Switch to Routes
  Route,
  Link // Corrected Link capitalization
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Corrected Link tag */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Corrected Link tag */}
            </li>
            <li>
              <Link to="/users">Users</Link> {/* Corrected Link tag */}
            </li>
          </ul>
        </nav>
        <Routes> 
          <Route path="/about" element={<About />} /> 
          <Route path="/users" element={<Users />} /> 
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
