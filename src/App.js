import React from 'react';
import Header from "./components/Header"
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';
import IncomeExpenses from './components/IncomeExpenses2';
import AddTransaction from './components/AddTransaction';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
