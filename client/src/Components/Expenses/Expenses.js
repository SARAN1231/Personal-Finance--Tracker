import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layout";
import ExpenseForm from "../Forms/ExpenseForm";
import { GlobalContext } from "../../Context/Globalcontext";
import IncomeItem from "../IncomeItem/IncomeItem";
const Expenses = () => {
  const { contextvalue } = useContext(GlobalContext);
  const { Expenses, getExpenses, deleteexpense, totalexpense } = contextvalue;

  useEffect(() => {
    getExpenses();
  }, [Expenses]);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expenses: <span>${totalexpense()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {Expenses.map((expense) => {
              const {
                id,
                title,
                amount,
                createdAt,
                category,
                description,
                type,
              } = expense;
              return (
                <IncomeItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  amount={amount}
                  createdAt={createdAt}
                  type={type}
                  category={category}
                  indicatorColor="var( --color-delete)"
                  deleteItem={deleteexpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};
const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Expenses;
