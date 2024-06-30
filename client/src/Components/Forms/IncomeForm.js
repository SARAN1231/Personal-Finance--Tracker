
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Context/Globalcontext";
import { plus } from "../../Utils/Icons";
import Button from "../Button/Button";

const IncomeForm = () => {
  const { contextvalue } = useContext(GlobalContext);
  const { addIncome } = contextvalue;
  const [Incomeinputs, setIncomeinputs] = useState({
    title: "",
    amount: "",
    category: "",
    description: "",
  });

  const { title, amount, category, description } = Incomeinputs;

  const handleinputchange = (e) => {
    setIncomeinputs({ ...Incomeinputs, [e.target.name]: e.target.value });
  };
  const incomeinputsubmit = async (e) => {
    e.preventDefault();
    if (title === "" || amount === "" || category === "") {
      alert("Please fill in all the fields");
    } else {
      addIncome(Incomeinputs);
      setIncomeinputs({
        title: "",
        amount: "",
        category: "",
        description: "",
      });
    }
  };
  return (
    <FormStyled onSubmit={(e) => incomeinputsubmit(e)}>
      <div className="input-control">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Salary Title"
          onChange={(e) => {
            handleinputchange(e);
          }}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          name="amount"
          value={amount}
          placeholder="Salary Amount"
          onChange={(e) => {
            handleinputchange(e);
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={(e) => {
            handleinputchange(e);
          }}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
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
          onChange={(e) => {
            handleinputchange(e);
          }}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};

const FormStyled = styled.form`
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
export default IncomeForm;
