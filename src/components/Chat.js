import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {sidebarChannelsData} from "../data/SidebarData";
import {useTheme, useThemeUpdate} from '../ThemeContext'

function Chat() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyle = {
    backgroundColor: darkTheme? 'white' : 'rgb(39 45 59)',
    color: darkTheme? 'black' : 'white'
  }

  return (
    <ChatContainer style={themeStyle}>
        <ChatHeader>
          <ChatHeaderChannel>
            <strong>claver</strong>
            <p>Company-wide announcements and work-based matters</p>
          </ChatHeaderChannel>
          <ChatHeaderDetails>
            <p>Details</p>
            <ErrorOutlineIcon />
          </ChatHeaderDetails>
        </ChatHeader>
        </ChatContainer>
      
  );
}

export default Chat;

const ChatContainer = styled.div`

`

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 20px;
`;

const ChatHeaderChannel = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 10px;
  }
`;

const ChatHeaderDetails = styled.div`
  display: flex;
  margin: 0 20px 0 0;

  p {
    margin-right: 10px;
  }
`;
