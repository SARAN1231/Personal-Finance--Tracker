import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./Styles/Layout.js";
import Orb from "./Components/Orb/Orb.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Transactions from "./Components/Transactions/Transactions.js";
import Income from "./Components/Income/Income.js";
import Expenses from "./Components/Expenses/Expenses.js";
import { useState } from "react";
function App() {
  const [active, setactive] = useState(1); // active contains id of an sidebar which is clicked
  const displaymain = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <AppStyled>
      <Orb />
      <MainLayout>
        <Sidebar active={active} setactive={setactive} />
        <main>{displaymain()}</main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;
