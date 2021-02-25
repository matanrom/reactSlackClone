import React from 'react'
import styled from "styled-components"
import {useTheme, useThemeUpdate} from "../ThemeContext"

const ChatMessage = () => {

  const darkTheme = useTheme()

  const themeStyle = {
    backgroundColor: darkTheme ? "#d3d3d347" : "#2d354e",
    color: darkTheme ? "black" : "#e5e1e1",
  }

  return (
    <Container style={themeStyle}>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/women/82.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Matan
          <span style={themeStyle}>12/7/1955</span>
        </Name>
        <Text>
          Challenge
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  background: #e7e5e5;
`

const UserAvatar = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img{
    width: 100%;
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;

`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`
const Text = styled.span`

`