import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import {ThemeProvider} from "./ThemeContext";

function App() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    
    <div className="app">
      <ThemeProvider>
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar/>
            <Switch>
              <Route path="/room/:channel">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
      </ThemeProvider>
    </div>
    
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vw;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
