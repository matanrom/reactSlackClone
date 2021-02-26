import React, {useState, useEffect} from "react"
import styled from "styled-components"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {sidebarChannelsData} from "../data/SidebarData"
import {useTheme, useThemeUpdate} from "../ThemeContext"
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from "../firebase"
import firebase from "firebase"
import { useParams } from "react-router-dom"

function Chat({user}) {
  const darkTheme = useTheme()

  const themeStyle = {
    backgroundColor: darkTheme ? "#d3d3d347" : "rgb(39 45 59)",
    color: darkTheme ? "black" : "#e5e1e1",
  }

  const messageHover = {
    backgroundColor: darkTheme ? "red" : "yellow",
  }

  let{channelId} = useParams()
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState()

  const getMessages = () => {
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) =>{
      let messages = snapshot.docs.map((doc) => doc.data())
      setMessages(messages)
    })
  }

  const sendMessage = (text) => {
    if(channelId){
      let payload = {
        text: text,
        user: user.name,
        userImage: user.photo,
        timestamp: firebase.firestore.Timestamp.now(),
      }
      db.collection('rooms').doc(channelId).collection('messages').add(payload)
    }
  }

  const getChannel = () => {
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot) => {
      setChannel(snapshot.data())
    })
  }

 

  useEffect(() => {
    getChannel()
    getMessages()

    // return () => {
    //   getChannel()  
    // }
  }, [channelId])

  

  return (
    <Container style={themeStyle}>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          <ChannelInfo style={themeStyle}>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails style={themeStyle}>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MaessageContainer>
        {
        messages?.length > 0 &&
        messages.map((data, index) =>(
          <Message key={index}>
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          </Message>
        ))}
      </MaessageContainer>
      <ChatInput sendMessage={sendMessage}/>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

const Channel = styled.div`
  
`

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color: #606060;

`

const ChannelName = styled.div`
  font-weight: 700;
`
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px
`

const MaessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  overflow-y: scroll;
`

const Message = styled.div`
  width:90%;
  margin-bottom: 20px;

  :hover{
    background: #e2e1f0;    
  }
`
