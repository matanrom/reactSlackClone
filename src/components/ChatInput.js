import React from "react"
import styled from "styled-components"
import SendIcon from "@material-ui/icons/Send"
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined"
import FormatBoldOutlinedIcon from "@material-ui/icons/FormatBoldOutlined"
import FormatItalicOutlinedIcon from "@material-ui/icons/FormatItalicOutlined"
import FormatClearIcon from "@material-ui/icons/FormatClear"
import CodeIcon from "@material-ui/icons/Code"
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined"
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered"
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted"
import ClearAllOutlinedIcon from "@material-ui/icons/ClearAllOutlined"
import DeveloperModeOutlinedIcon from "@material-ui/icons/DeveloperModeOutlined"
import FormatSizeOutlinedIcon from "@material-ui/icons/FormatSizeOutlined"
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined"
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined"
import {useTheme, useThemeUpdate} from "../ThemeContext"

const ChatInput = () => {

  const darkTheme = useTheme()

  const themeStyle = {
    backgroundColor: darkTheme ? "#d3d3d347" : "#2d354e",
  }

  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SentButton>
            <Send />
          </SentButton>
        </form>
      </InputContainer>
      <TextDecoration style={themeStyle}>
        <Left>
          <FlashOnOutlinedIcon />
          <p>|</p>
          <FormatBoldOutlinedIcon />
          <FormatItalicOutlinedIcon />
          <FormatClearIcon />
          <CodeIcon />
          <LinkOutlinedIcon />
          <FormatListNumberedIcon />
          <FormatListBulletedIcon />
          <ClearAllOutlinedIcon />
          <DeveloperModeOutlinedIcon />
        </Left>
        <Right>
          <FormatSizeOutlinedIcon />
          <AlternateEmailOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
        </Right>
      </TextDecoration>
    </Container>
  )
}

export default ChatInput

const Container = styled.div`
  // padding: 0 20px 0 20px;
  border: 1px solid #8d8d8e;
  border-radius: 5px;
  margin: 10px 45px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
`

const InputContainer = styled.div`
  // border: 1px solid #8D8D8E;
  // border-radius: 4px;
  // margin-bottom: 5px;

  form {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 10px;
    background: #f2f2f2;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background: #f2f2f2;
    }
    input:focus {
      outline: none;
    }
  }
`

const SentButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #148567;
  }
`

const Send = styled(SendIcon)`
  color: #d9d9d9;
  width: 18px;
`

const TextDecoration = styled.div`
  display: flex;
  background: #dddcdc;
  border-top: 1px solid lightGray;
  padding: 5px;

  .MuiSvgIcon-root {
    margin: 0 5px;
  }
  p{
    margin: 0 5px;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  p {
    align-self: flex-start;
  }
`

const Right = styled.div``
