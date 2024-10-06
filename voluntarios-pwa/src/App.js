import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Ajuste conforme sua estrutura
import RegisterLogin from './pages/registerLogin'; // Ajuste conforme sua estrutura
import Expeditions from './pages/expeditions'; // Importando Expeditions

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register-login" element={<RegisterLogin />} />
                <Route path="/expeditions" element={<Expeditions />} /> {/* Rota para Expedições */}
                {/* Adicione as outras rotas aqui conforme necessário */}
            </Routes>
        </Router>
    );
};

export default App;
