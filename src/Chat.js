import React, { useState,useEffect } from 'react';
import "./Chat.css";
import db from "./firebase";

import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutLinedIcon from "@material-ui/icons/InfoOutlined";
import Message from './Message';
function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] =useState(null);
    const [roomMessages, setRoomMessages] =useState([]);


    useEffect(() => {
       if(roomId){
           db.collection('rooms')
           .doc(roomId)
           .onSnapshot(snapshot =>(
               setRoomDetails(snapshot.data())
           ))
       }
       db.collection('rooms').doc(roomId)
       .collection('messages')
       .orderBy('timestamp','asc')
       .onSnapshot((snapshot) =>
           setRoomMessages(
               snapshot.docs.map(doc => doc.data())
           )

       );
    }, [roomId]);
    console.log(roomDetails);
    console.log("MESSAGES>>>>",roomMessages);
    return (
        <div className="chat">
           
            <div className='chat__header'>
                <div className="cahat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon/>
                    </h4>

                </div>
                <div className="chat__headerRight">  
                <p> <InfoOutLinedIcon/>Details     </p>
                </div>
            </div>
            <div className="chat__messages">
                {roomMessages.map(({message,
                 timestamp,user,userImage}) => (
                     <Message
                     message={message}
                     timestamp={timestamp}
                     user={user}
                     userImage={userImage}
                     />
                ))}

            </div>
            
        </div>
    )
}

export default Chat
