import React from 'react';
import TableProvider from './context/TableProvider';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <TableProvider>
      <Header />
      <Table />
    </TableProvider>
  );
}

export default App;
