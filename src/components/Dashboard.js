import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🌟 Hello World Dashboard</h1>
        <p className="greeting">{greeting}! Welcome to Laimon Test</p>
      </header>
      
      <div className="dashboard-content">
        <div className="card">
          <h2>📅 Current Time</h2>
          <div className="time-display">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="date-display">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        <div className="card">
          <h2>🚀 Project Info</h2>
          <ul>
            <li><strong>Framework:</strong> React.js 18.2.0</li>
            <li><strong>Repository:</strong> laimontest</li>
            <li><strong>Status:</strong> Active ✅</li>
            <li><strong>Created:</strong> October 2025</li>
          </ul>
        </div>

        <div className="card">
          <h2>📊 Quick Stats</h2>
          <div className="stats-grid">
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">100</span>
              <span className="stat-label">% Success</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="dashboard-footer">
        <p>Built with ❤️ using React.js | Laimon Development</p>
      </footer>
    </div>
  );
};

export default Dashboard;