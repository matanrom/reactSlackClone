import React from 'react'
import styled from "styled-components"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useTheme, useThemeUpdate} from '../ThemeContext'

function Header() {

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyle = {
    backgroundColor: darkTheme? '#350d36' : '#0d111a'
  }

  return (
    <Container className="header" style={themeStyle}>
      <Main>
        <AccessTimeIcon/>
        <SearchContainer>
          <Search>
          <input type="text" placeholder="Search..."/>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon/>
      </Main>
      <ToggleSwitch>
        <input type="checkbox" 
        onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </ToggleSwitch>
      <UserContainer>
        <Name>
          Matan
        </Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png"/>
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
  
`

const Main = styled.div`
  display: flex;
  margin: 0 16px 0 16px;
`

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px 0 16px;
`

const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  display: flex;
  align-items: center;

  input{
    background-color: transparent;
    border: none;
    padding: 0 8px 0 8px;
    color: white;
    padding: 4px 0 4px 0;
  }
  input:focus{
    outline: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img{
    width: 100%;
  }
`

const ToggleSwitch = styled.label`
position: relative;
display: inline-block;
width: 50px;
height: 26px;

input {
  transform: scale(0.5);
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 28px;
  left: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider::before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round::before {
  border-radius: 50%;
}

.slider::after {
  display: inline;
  position: absolute;
  right: 9.3%;
  bottom: 17.5%;
}

input:checked + .slider::after {
  display: inline;
  position: absolute;
  right: 56.3%;
  bottom: 14.5%;
}
`