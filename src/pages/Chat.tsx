import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormEvent, useEffect, useState } from "react";
import ChatBox from '../../src/components/Chatbox';
import { Button, Title } from "../../src/styled"

//import { firebaseApp } from "../../src/typed";


// https://dev.to/alterclass/build-a-realtime-chat-app-in-5-min-with-react-and-firebase-3f8m


// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDe4mZ-ly9p8y70UZ4UxqU7IcHpyi8_Wa4",
    authDomain: "portfolio-chat-dcfae.firebaseapp.com",
    projectId: "portfolio-chat-dcfae",
    storageBucket: "portfolio-chat-dcfae.appspot.com",
    messagingSenderId: "971570349606",
    appId: "1:971570349606:web:12654844828e4d3827c8e7"
});


const db = firebaseApp.firestore();

export const Chat = () => {


    const [messages, setMessages] = useState<({ id: number, text: string; createdAt: string }[])>([]);
    const [newMessage, setNewMessage] = useState<string>("");

    const query = db.collection('messages').orderBy('createdAt', 'desc').limit(5);

    const unsubscribe = () => query.onSnapshot((querySnapshot: { docs: any[]; }) => {
        const data = querySnapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        })
        console.log("data", data)
        setMessages(data)
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            // Add new message in Firestore
            db.collection("messages").add({
                text: trimmedMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        // Clear input field
        setNewMessage('');
    }

    useEffect(() => {
        unsubscribe()
    }, [])

    return (
        <div style={{ margin: "auto" }}>
            <Title>Real time chat with Firebase</Title>


            <form onSubmit={handleSubmit}>
                <input
                    style={{ border: "1px solid #ccc", padding: "8px" }}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button type="submit" disabled={!newMessage || newMessage.length > 20}>Send</Button>
            </form>
        </div>
    )
}

export default Chat

