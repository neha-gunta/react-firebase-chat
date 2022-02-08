import { useState } from "react";
import { db,auth } from "../firebase-setup";
import {serverTimestamp} from "firebase/firestore"


const MessageInput = ({scroll}) => {
    const [inp,setInp]=useState("")

    async function addMsgs(e){
        e.preventDefault()
        if(inp==="") return;
const{uid,photoURL} =auth.currentUser
const sentBy=auth.currentUser.displayName
// console.log(inp+" "+uid+" "+photoURL)
await db.collection("messages").add({
    text:inp,
    uid, photoURL,sentBy,
    createdAt:serverTimestamp()
})
setInp('')
scroll()

    }
    return ( 
        <div class="msgIP">
           <form onSubmit={addMsgs}>
                <input class="msgbox" type="text" value={inp} onChange={e=>setInp(e.target.value)} placeholder="Message.."></input>
                <button class="submitbtn" type="Submit" >Send</button>
            </form>
        </div>
     );
}
 
export default MessageInput;
