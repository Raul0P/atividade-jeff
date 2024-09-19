import React from 'react';
import { useBudget } from '../context/BudgetContext';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';

const Dashboard: React.FC = () => {
  const { totalIncome, totalExpense, balance } = useBudget();

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div>
          <h2>Total de Receitas</h2>
          <p>R$ {totalIncome.toFixed(2)}</p>
        </div>
        <div>
          <h2>Total de Despesas</h2>
          <p>R$ {totalExpense.toFixed(2)}</p>
        </div>
        <div>
          <h2>Saldo</h2>
          <p>R$ {balance.toFixed(2)}</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <Receitas />
        </div>
        <div>
          <Despesas />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
