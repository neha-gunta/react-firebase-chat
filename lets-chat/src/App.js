import SignIn from './components/SignIn';
import Chat from './components/Chat';
import './App.css';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase-setup';


function App() {
  const [user]=useAuthState(auth)
  return (
  <div style={{display:"flex", flexDirection:"column"}}>
  {user ? (<Chat />):(<SignIn />)}
    </div>
  );
}

export default App;
