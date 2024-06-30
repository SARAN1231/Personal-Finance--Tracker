import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { plus } from '../../Utils/Icons';
import Button from '../Button/Button';
import { GlobalContext } from '../../Context/Globalcontext';

const ExpenseForm = () => {
    const {contextvalue} = useContext(GlobalContext)
    const { addExpense } = contextvalue;
    const [ExpenseInput,setExpenseInput] = useState({
        title: '',
        amount: '',
        category: '',
        description: ''
    })

    const {title, amount, category, description} = ExpenseInput;

  const handleinputchange = (e)=> {
    setExpenseInput({...ExpenseInput, [e.target.name]: e.target.value})
  }

  const ExpenseInputSubmit = (e) => {
    e.preventDefault();
    if(title === "" || amount === "" || category === "") {
      alert("Please fill in all the fields")
    } else {
    addExpense(ExpenseInput)
      setExpenseInput({
        title: '',
        amount: '',
        category: '',
        description: ''
      })
    }
  }
  return (
    <ExpenseFormStyled onSubmit={(e) => {ExpenseInputSubmit(e)}}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Expense Title"
          onChange={(e) => handleinputchange(e)}
        />
      </div>
      <div className="input-control">
        <input
          value={amount}
          type="text"
          name={"amount"}
          placeholder={"Expense Amount"}
          onChange={(e) => handleinputchange(e)}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={(e) => handleinputchange(e)}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={(e) => handleinputchange(e)}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Expense"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </ExpenseFormStyled>
  );
}
const ExpenseFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }

  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }

  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
export default ExpenseForm