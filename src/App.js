import "./App.css"
import React, { useEffect, useState } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Chat from "./components/Chat"
import styled from "styled-components"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {ThemeProvider} from "./ThemeContext"
import db from "./firebase"

function App() {
  
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const getChannels = () => {
      db.collection("rooms").onSnapshot((snapshot) => {
        setRooms(snapshot.docs.map((doc) => {
          return {id: doc.id, name: doc.data().name}
          // return doc.data()
        }))
      })
    }

    getChannels()
    // console.log(rooms)

    return () => {
      getChannels()
      // console.log('cleanup')
    }
  }, [])

  // console.log(rooms)

  return (
    <div className="app">
      <ThemeProvider>
        <Router>
          <Container>
            <Header />
            <Main>
              <Sidebar rooms={rooms}/>
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
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
