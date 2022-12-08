import 'firebase/auth';
import 'firebase/firestore';
import styled from "styled-components"
import firebase from 'firebase/app';
import { FormEvent, useEffect, useState } from 'react';

import { Button, Title } from '../../src/styled';

// Import the functions you need from the SDKs you need
// import ChatBox from '../../src/components/Chatbox';

//import { firebaseApp } from "../../src/typed";

// https://dev.to/alterclass/build-a-realtime-chat-app-in-5-min-with-react-and-firebase-3f8m

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDDDRcmACvq-0h0CynPiUCExWRtjgl-9Ag',
    authDomain: 'chatbox-ba14c.firebaseapp.com',
    projectId: 'chatbox-ba14c',
    storageBucket: 'chatbox-ba14c.appspot.com',
    messagingSenderId: '1874358412',
    appId: '1:1874358412:web:a77584d6d3043291528ba9',
    measurementId: 'G-QB68B80NJ1',
});

const db = firebaseApp.firestore();

export const Chat = () => {
    const [messages, setMessages] = useState<{ id: number; text: string; createdAt: string }[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const query = db.collection('messages').orderBy('createdAt', 'desc').limit(8);

    const unsubscribe = () =>
        query.onSnapshot((querySnapshot: { docs: any[] }) => {
            const data = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id,
                };
            });
            console.log('data', data);
            setMessages(data);
        });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            // Add new message in Firestore
            db.collection('messages').add({
                text: trimmedMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        // Clear input field
        setNewMessage('');
    };

    useEffect(() => {
        unsubscribe();
    }, []);

    return (
        <div className="container" style={{ textAlign: "center" }} >
            <Container>
                <Title>Chat over any cycling topic</Title>
                <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                    {messages.length > 0 &&
                        messages.map((message) => {
                            return (
                                <div>
                                    <p>{message.text}</p>

                                </div>

                            );
                        })}
                </div>


                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control d-inline"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="btn btn-success mt-2"
                        disabled={!newMessage || newMessage.length > 50}>
                        Post
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Chat;

const Container = styled.div`
  display: 'flex';
`
