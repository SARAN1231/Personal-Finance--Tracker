import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layout";
import History from "../History/History";
import { GlobalContext } from "../../Context/Globalcontext";
const Transactions = () => {
  const {contextvalue} = useContext(GlobalContext)
  const { AllTransactionHistory } = contextvalue;

  const [...history] = AllTransactionHistory()
  return (
    <TransactionsStyled>
      <InnerLayout>
        <h2>All Transactions</h2>
        <div className="history-con" >
          {history.map((item) => {
            const { _id, title, amount, type } = item;
            return (
              <div key={_id} className="history-item">
                <p
                  style={{
                    color: type === "Expenses" ? "red" : "var(--color-green)",
                  }}
                >
                  {title}
                </p>

                <p
                  style={{
                    color: type === "Expenses" ? "red" : "var(--color-green)",
                  }}
                >
                  {type === "Expenses"
                    ? `-${amount <= 0 ? 0 : amount}`
                    : `+${amount <= 0 ? 0 : amount}`}
                </p>
              </div>
            );
          })}
        </div>
      </InnerLayout>
    </TransactionsStyled>
  );
};

const TransactionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
     .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
`;

export default Transactions;
