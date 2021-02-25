import React, {useState, useEffect} from "react"
import styled from "styled-components"
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import {sidebarChannelsData} from "../data/SidebarData"
import {useTheme, useThemeUpdate} from "../ThemeContext"
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
  const darkTheme = useTheme()

  const themeStyle = {
    backgroundColor: darkTheme ? "#d3d3d347" : "rgb(39 45 59)",
    color: darkTheme ? "black" : "#e5e1e1",
  }

  const messageHover = {
    backgroundColor: darkTheme ? "red" : "yellow",
  }

  return (
    <Container style={themeStyle}>
      <Header>
        <Channel>
          <ChannelName>claver</ChannelName>
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
        <Message>
          <ChatMessage/>
        </Message>
        <Message>
          <ChatMessage/>
        </Message>
      </MaessageContainer>
      <ChatInput/>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
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
`

const Message = styled.div`
  width:90%;
  margin-bottom: 20px;

  :hover{
    background: #e2e1f0;    
  }
`
