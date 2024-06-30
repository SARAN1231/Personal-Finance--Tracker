import axios from "axios";
import React, { createContext, useState } from "react";

 export const GlobalContext = createContext(null);

 export  const GlobalProvider = (props) => {
  const [Incomes, setIncomes] = useState([]);
  const [Expenses, setExpenses] = useState([]);

  const getIncomes = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/income/all`);
      setIncomes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addIncome = async (income) => {
    try {
      await axios.post(`http://localhost:8080/income/add`, income);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteincome = (id) => {
    try {
    axios.delete(`http://localhost:8080/income/delete/${id}`);
    getIncomes()
    }
    catch(err) {
      console.log(err);
    
    }
  }
  const totalincome = () => {
    let total = 0;
    Incomes.map((income) => (total += income.amount));
    return total;
  }

  const getExpenses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/expense/all`);
      setExpenses(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addExpense = async (expense) => {
    try {
      await axios.post(`http://localhost:8080/expense/add`, expense);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteexpense = (id) => {
    try {
    axios.delete(`http://localhost:8080/expense/delete/${id}`);
    getExpenses()
    }
    catch(err) {
      console.log(err);
    
    }
  }
  const totalexpense = () => {
    let total = 0;
    Expenses.map((expense) => (total += expense.amount));
    return total;
  }

  const totalBalance = () => {
    return totalincome() - totalexpense()
  }

  const TransactionHistory = () => {
    const history = [...Incomes,...Expenses]; // storing all expenses and income in array
    history.sort((a,b)=>{
      return new Date(b.createdAt) - new Date(a.createdAt)
    
    })
    return history.slice(0,3) // to return only first 3 elements in an array
  }
  const AllTransactionHistory = () => {
    const history = [...Incomes,...Expenses]; // storing all expenses and income in array
    history.sort((a,b)=>{
      return new Date(b.createdAt) - new Date(a.createdAt)
    
    })
    return history 
  }
  const contextvalue = {
    Incomes,
    Expenses,
    addIncome,
    addExpense,
    getExpenses,
    getIncomes,
    totalincome,
    deleteincome,
    deleteexpense,
    totalexpense,
    totalBalance,
    TransactionHistory,
    AllTransactionHistory,
  };
  return (
    <GlobalContext.Provider value={{ contextvalue }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
