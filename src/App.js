import "./App.css"
import React, { useEffect, useState } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./components/Login"
import Chat from "./components/Chat"
import styled from "styled-components"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {ThemeProvider} from "./ThemeContext"
import db, {auth, provider} from "./firebase"

function App() {
  
  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

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

  const signOut = () => {
    auth.signOut().then(() =>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  console.log('user state: ', user)
  // console.log(rooms)

  return (
    <div className="app">
      <ThemeProvider>
        <Router>
          {
          !user ? 
          <Login setUser={setUser}/>
          : 
            <Container>
              <Header signOut={signOut} user={user}/>
              <Main>
                <Sidebar rooms={rooms}/>
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user}/>
                  </Route>
                  <Route path="/">
                    Select or Create Channel
                  </Route>
                </Switch>
              </Main>
            </Container>
          }
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
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
