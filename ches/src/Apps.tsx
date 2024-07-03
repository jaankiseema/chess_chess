import { GlobalStyle } from "./styles/globalStyle";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./containers/Home";
import CreateGame from "./containers/CreateAndJoinGame/CreateGame";
import JoinGame from "./containers/CreateAndJoinGame/JoinGame";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const Apps = () => {
  console.log("app.tsx file is running.....");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route path="/join-game" element={<JoinGame />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
  background-image: radial-gradient(circle, #427e60, #35654d, #2a513e);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Apps;
