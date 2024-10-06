import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; 
import RegisterLogin from './pages/registerLogin'; 
import Expeditions from './pages/expeditions'; 
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register-login" element={<RegisterLogin />} />
                <Route path="/expeditions" element={<Expeditions />} />
            </Routes>
        </Router>
    );
};

export default App;
