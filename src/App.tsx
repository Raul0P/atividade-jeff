import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Receitas from './components/Receitas';
import Despesas from './components/Despesas';
import { BudgetProvider } from './context/BudgetContext';

const App: React.FC = () => {
  return (
    <BudgetProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </BudgetProvider>
  );
};

export default App;
