import React from 'react';
import { FaUserCircle } from 'react-icons/fa';  // Profile icon

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>Interview Simulator</h1>
        </div>
        <div className="nav-buttons">
          <button className="nav-button">Help</button>
          <button className="nav-button">About</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search for interview questions..." />
        </div>

        {/* Profile Icon */}
        <div className="profile-icon">
          <FaUserCircle size={50} />
        </div>

        {/* AI Image in Center */}
        <div className="ai-image">
          <img src="https://via.placeholder.com/300" alt="AI" />
        </div>

        {/* Tagline */}
        <div className="tagline">
          <h2>Prepare, Test, Succeed!</h2>
        </div>

        {/* Get Started Button */}
        <div className="get-started">
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Interview Simulator | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
