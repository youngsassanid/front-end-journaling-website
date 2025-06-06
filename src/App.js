import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Conversation } from './Conversation';
import { Conversations } from './Conversations';
import { Login } from './Login';
import { Home } from './Home';
import "./styles.css";
import { useState, useEffect } from 'react';
import { Journal } from './Journal';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedIn(!!user);
  }, []);

  useEffect(() => {
    const currentColor = localStorage.getItem("darkMode");
    if (currentColor === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const buttonStyle = {
    padding: '10px 16px',
    margin: '0 8px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#444',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#666',
  };

  return (
      <BrowserRouter>
        <div className="header-container" style={{ padding: '20px', textAlign: 'center' }}>
          <h1 className="main-title" style={{ marginBottom: '20px' }}>E-Journal</h1>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <button
                onClick={() => setDarkMode(!darkMode)}
                style={buttonStyle}
                onMouseOver={e => e.target.style.backgroundColor = '#666'}
                onMouseOut={e => e.target.style.backgroundColor = '#444'}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <Link to="/">
              <button style={buttonStyle}
                      onMouseOver={e => e.target.style.backgroundColor = '#666'}
                      onMouseOut={e => e.target.style.backgroundColor = '#444'}
              >
                Home
              </button>
            </Link>

            <Link to="/login">
              <button style={buttonStyle}
                      onMouseOver={e => e.target.style.backgroundColor = '#666'}
                      onMouseOut={e => e.target.style.backgroundColor = '#444'}
              >
                Login
              </button>
            </Link>

            {LoggedIn ? (
                <Link to="/journal">
                  <button style={buttonStyle}
                          onMouseOver={e => e.target.style.backgroundColor = '#666'}
                          onMouseOut={e => e.target.style.backgroundColor = '#444'}
                  >
                    Journal
                  </button>
                </Link>
            ) : (
                <span style={{ color: '#888', fontSize: '14px' }}>
              To Access Journal Feature You Have to Login!
            </span>
            )}

            {LoggedIn && (
                <button
                    onClick={() => {
                      localStorage.removeItem("user");
                      setLoggedIn(false);
                    }}
                    style={buttonStyle}
                    onMouseOver={e => e.target.style.backgroundColor = '#666'}
                    onMouseOut={e => e.target.style.backgroundColor = '#444'}
                >
                  Logout
                </button>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/journal" element={<Journal darkMode={darkMode} />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/conversation/:conversationId" element={<Conversation />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
