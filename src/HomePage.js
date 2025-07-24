import React from 'react';
const HomePage = () => {
  return (
    <div className="home-page">
      {/* Welcome Banner */}
      <header className="welcome-banner">
        <h1>Welcome to Interview Simulator</h1>
        <p>Practice and improve your interview skills with real-time feedback.</p>
        <button className="start-button">Start Simulation</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Wide variety of interview questions</li>
          <li>Real-time feedback on responses</li>
          <li>Mock interview environment</li>
          <li>Track your progress over time</li>
        </ul>
      </section>
      

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Interview Simulator. All rights reserved.</p>
        <div>
          <a href="#">About</a> | <a href="#">Contact</a> | <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;