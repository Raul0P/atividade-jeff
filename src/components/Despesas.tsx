import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const Despesas: React.FC = () => {
  const { addEntry } = useBudget();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    addEntry({ id: Date.now(), description, amount, type: 'despesa' });
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      <h2>Adicionar Despesa</h2>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
};

export default Despesas;
