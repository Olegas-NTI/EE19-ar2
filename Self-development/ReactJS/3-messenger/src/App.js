import React, {useRef, useState} from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyAUWmLpFeMfdOAcG8coTlm0vbCl47inGJg",
  authDomain: "messenger-51fb1.firebaseapp.com",
  projectId: "messenger-51fb1",
  storageBucket: "messenger-51fb1.appspot.com",
  messagingSenderId: "351819297097",
  appId: "1:351819297097:web:06241fa8288d041d81ea98"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      <LoggaUt />
      </header>
      <section>
        {user ? <ChatRoom /> : <LoggaIn />}
      </section>
    </div>
  );
}

function LoggaIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
    <button onClick={signInWithGoogle}>Logga in med Google!</button>
    </>
  )
}

function LoggaUt() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Logga ut</button>
  )
}

function ChatRoom() {
  const dummy = useRef()
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');

    dummy.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}> </div>
      </main>
      
      <form onSubmit={sendMessage}>
        
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">🤠</button>
      </form>
    </>
  )
}

function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://i1.sndcdn.com//artworks-000625863667-3r2ney-t500x500.jpg'} />
      <p>{text}</p>

    </div>
  )
}

export default App;
