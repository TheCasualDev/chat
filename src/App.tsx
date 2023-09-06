
import { initializeApp } from 'firebase/app';

import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyD8ppW7WPYO0PhuoBL0WTvTTqedL_DSxYI",
  authDomain: "chat-9e94f.firebaseapp.com",
  projectId: "chat-9e94f",
  storageBucket: "chat-9e94f.appspot.com",
  messagingSenderId: "428321041715",
  appId: "1:428321041715:web:94ea3baf1b535421a32246",
  measurementId: "G-5PY8T58GL5"
};

initializeApp(firebaseConfig)

const user = true

function App() {

  return (

    <>

      <header>

        <h1>This is the header</h1>

      </header>

      <section>

        <h2>This is the section...</h2>

        {user ? <ChatRoom /> : <SignIn />}

      </section>

      <footer>

        <h1>This is the footer</h1>

      </footer>

    </>

  )
}

function SignIn() {

  return(
    <p>This is a login page</p>
  )

}

function ChatRoom() {

  return(
    <p>This is the chatroom</p>
  )

}



export default App
