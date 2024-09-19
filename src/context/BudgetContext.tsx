import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Entry {
  id: number;
  description: string;
  amount: number;
  type: 'receita' | 'despesa';
}

interface BudgetContextProps {
  entries: Entry[];
  addEntry: (entry: Entry) => void;
  deleteEntry: (id: number) => void;
  totalIncome: number;
  totalExpense: number;
  balance: number;
}

const BudgetContext = createContext<BudgetContextProps | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (entry: Entry) => setEntries([...entries, entry]);

  const deleteEntry = (id: number) =>
    setEntries(entries.filter(entry => entry.id !== id));

  const totalIncome = entries
    .filter(entry => entry.type === 'receita')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = entries
    .filter(entry => entry.type === 'despesa')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <BudgetContext.Provider value={{ entries, addEntry, deleteEntry, totalIncome, totalExpense, balance }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};
