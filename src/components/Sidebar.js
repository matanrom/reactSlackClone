import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {sidebarItemsData, sidebarChannelsData} from "../data/SidebarData";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import Header from './Header';
import {useTheme, useThemeUpdate} from '../ThemeContext'
import db from "../firebase";
import {useHistory} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

function Sidebar(props) {

  const history = useHistory()

  const goToChannel = (id) =>{
    if(id){
      history.push(`/room/${id}`)
    }
  }

    const darkTheme = useTheme()
  
    const themeStyle = {
      backgroundColor: darkTheme? '#3f0e40' : '#141a26'
    }

  const addChannel = () => {
    const promptName = prompt('enter channel name')
    if(promptName){
      db.collection('rooms').add({
        name: promptName
      })
    }
  }

  const deleteChannel = (id) => {
    if(id){
      const a = db.collection('rooms').doc(id).delete()
    }    
  }

  return (
    <Container style={themeStyle}>
      <WorkSpaceContainer>
        <Name>Matan</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item, i) => (
          <MainChannelItem key={i}>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon onClick={addChannel}/>
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((channel) => (
              <Channel onClick={() => goToChannel(channel.id)} key={channel.id}>
                  <p> # {channel.name}</p>
                  <DeleteIcon onClick={() => deleteChannel(channel.id)}/>
              </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  
`;



const WorkSpaceContainer = styled.div`
  color: White;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;


const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover{
    background: #350D36;
  }
`;


const ChannelsContainer = styled.div`
color: rgb(188, 171, 188);
margin-top: 10px;
`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0 12px 0 19px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  .MuiSvgIcon-root{
    margin-right: 12px;
  }
  p{
    flex: 1;
  }
  :hover{
    background: #350D36;
  }
`