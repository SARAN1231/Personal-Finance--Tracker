import React, { useContext } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { GlobalContext } from "../../Context/Globalcontext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
    const {contextvalue} = useContext(GlobalContext)
    const {Incomes, Expenses} = contextvalue
    // For more details scroll down
    const data = {
      labels: Incomes.map((income) => {
        const { createdAt } = income;
        return createdAt;
      }), // x -axis 
      datasets: [
        {
          label: "Income",
          data: Incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
          fill: false,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.2, // making the line curvy
        },// income y axis
        {
          label: "Expenses",
          data: Expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
          tension: 0.2,
        },//expense y axis
      ],
    };
  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};
const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;
export default Chart;

// Labels: The labels array is populated with the createdAt property from each income entry. These labels will be used as the x-axis labels for the chart.
// Datasets:
// The Income dataset is created with:
// data: An array of amounts from the Incomes array.
// backgroundColor and borderColor: Define the color of the line and its border.
// tension: This property makes the line curvy.
// The Expenses dataset is similar but uses data from the Expenses array.