import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbarComponents/NavBar';
import LoginPage from './components/loginComponents/LoginPage';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
