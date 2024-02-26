import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const TextUploader = () => {
  const [textInput, setTextInput] = useState('');
  const [uploadedText, setUploadedText] = useState('');

  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleUpload = () => {
    if (textInput.trim() !== '') {
      // Initialize Firebase (replace with your own config)
      const firebaseConfig = {
        apiKey: "AIzaSyA8anYL4YiKlh3-92ucas8bY2-qyuwUhis",
  authDomain: "pankaj-bhaiya.firebaseapp.com",
  projectId: "pankaj-bhaiya",
  storageBucket: "pankaj-bhaiya.appspot.com",
  messagingSenderId: "533060426132",
  appId: "1:533060426132:web:eb7ece7b6ff4420f331781"
};

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      // Get a reference to the Firestore database
      const db = firebase.firestore();

      // Add a new document with the text content
      db.collection("textCollection").add({
        content: textInput
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setTextInput('');
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    }
  };

  useEffect(() => {
    // Initialize Firebase (replace with your own config)
    const firebaseConfig = {
       apiKey: "AIzaSyA8anYL4YiKlh3-92ucas8bY2-qyuwUhis",
  authDomain: "pankaj-bhaiya.firebaseapp.com",
  projectId: "pankaj-bhaiya",
  storageBucket: "pankaj-bhaiya.appspot.com",
  messagingSenderId: "533060426132",
  appId: "1:533060426132:web:eb7ece7b6ff4420f331781"
};

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Get a reference to the Firestore database
    const db = firebase.firestore();

    // Listen for changes in the text collection
    db.collection("textCollection").onSnapshot((querySnapshot) => {
      let textContent = '';
      querySnapshot.forEach((doc) => {
        textContent += doc.data().content + '\n';
      });
      setUploadedText(textContent);
    });
  }, []);

  return (
    <div>
      <textarea
        value={textInput}
        onChange={handleInputChange}
        placeholder="Type your text here..."
      />
      <button onClick={handleUpload}>Upload Text</button>
      <div>
        <h2>Uploaded Text:</h2>
        <pre>{uploadedText}</pre>
      </div>
    </div>
  );
};

export default TextUploader;
