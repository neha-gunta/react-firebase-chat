import React from 'react'
import {GoogleAuthProvider} from "firebase/auth"
import { auth } from '../firebase-setup'

export default function signIn() {
    function googleSignIn(){
        const provider= new GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

  return (
    <div>
      <button class="signInbtn" onClick={googleSignIn}>Google sign in</button>
      
    </div>
  )
}
