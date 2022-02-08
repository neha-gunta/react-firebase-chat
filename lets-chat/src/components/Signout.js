import React from 'react'
import {auth} from "../firebase-setup"


export default function Signout() {
 
  return (
    <a>
      <button class="signOut" onClick={()=>auth.signOut()}>signout</button>
    </a>
  )
}
