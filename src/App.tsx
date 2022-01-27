import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbarComponents/NavBar';
import LoginPage from './components/loginComponents/LoginPage';
import AuthenticationCallbackPage from './components/authenticationCallbackComponents/authenticationCallbackPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path={`/`} element={<LoginPage />} />
          <Route path={`/auth/:oauthProviderName/callback`} element={<AuthenticationCallbackPage />} />
          <Route path={`*`} element={
            <div>
              <h3 style={{ marginTop: "30px" }}>404 Page not found</h3>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
