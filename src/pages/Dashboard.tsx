import React from 'react';
import { useBudget } from '../context/BudgetContext';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const { totalIncome, totalExpense, balance } = useBudget();

  const data = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ['#36A2EB', 'red'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div className="summary">
        <div className="card income">
          <h2>Total de Receitas</h2>
          <p>R$ {totalIncome.toFixed(2)}</p>
        </div>
        <div className="card balance">
          <h2>Saldo Geral</h2>
          <p>R$ {balance.toFixed(2)}</p>
        </div>
        <div className="card expense">
          <h2>Total de Despesas</h2>
          <p>R$ {totalExpense.toFixed(2)}</p>
        </div>
      </div>

      <div style={{ width: '300px', height: '300px', margin: '20px auto' }}>
        <Pie data={data} options={options} />
      </div>

      <div className="form-container" >
        <Receitas />
        <Despesas />
      </div>
    </div>
  );
};

export default Dashboard;
