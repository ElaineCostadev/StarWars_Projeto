import React from 'react';
import TableProvider from './context/TableProvider';
import Header from './components/Header';
import Table from './components/Table';
import FormInput from './components/FormInput';
import FilterNumericProvider from './context/FilterNumericProvider';
import './App.css';

function App() {
  return (
    <TableProvider>
      <FilterNumericProvider>
        <Header />
        <FormInput />
        <Table />
      </FilterNumericProvider>
    </TableProvider>
  );
}

export default App;
