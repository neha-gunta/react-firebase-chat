import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { db,auth } from '../firebase-setup'
import MessageInput from './MessageInput';
import Signout from './Signout';

export default function Chat() {
    const [msgs,setMsgs]=useState([]);
    const scroll= useRef(null)
    const scrollDown=()=>{console.log("scrolled");
      scroll.current.scrollIntoView({
      behavior:"smooth"
  })}
  
//onSnapShot runs the collection when there is a change in data
    useEffect(()=>{ db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot(ss=>{setMsgs(ss.docs.map(doc=>doc.data()))}
        )}
   ,[])

    
  return (
     
      <div>
    <div className="navbar">
      <img className="profilePic" src={auth.currentUser.photoURL} alt="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" width="70px" height="70px"/>
      <h1>Hi, {auth.currentUser.displayName}</h1>
      <Signout />
    </div>
    
    <div className="chat">
      
   <img onClick={scrollDown} className="arrow" src="https://static.thenounproject.com/png/516849-200.png"  />
    
        {msgs.map(m=>{
            
        return (
        <div key={m.id} className={auth.currentUser.uid==m.uid ?"receivedmsg":"sentmsg"}>
            <img src={m.photoURL} className="msgPic" alt ="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
            <div className="non-picPart">
              <a className="By">{m.sentBy}</a>
              <a className="text">{m.text}</a>
            </div>
        </div>);
        })
        }
      </div>
      <div ref={scroll}>a</div>
      <MessageInput scroll={scrollDown}/>
    
    
    </div>
    
  )
      }
