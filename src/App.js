import styled from "styled-components";

import Navbar from "../src/components/Navbar";

import "./App.css";

function App() {
  return (
    <MainBody>
      <Navbar />
    </MainBody>
  );
}

const MainBody = styled.div`
  max-width: 100vh;
  width: 100%;
`;

export default App;
