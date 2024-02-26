// Import necessary dependencies and styles
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Use compat for version 9+
import 'firebase/compat/storage'; // Use compat for version 9+
import './Component2.css';

// Define the functional component Component4
const Component4 = () => {
  // Define state variables using useState hook
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // useEffect hook to run code on component mount
  useEffect(() => {
    // Firebase initialization
    firebase.initializeApp({
       apiKey: "AIzaSyA8anYL4YiKlh3-92ucas8bY2-qyuwUhis",
  authDomain: "pankaj-bhaiya.firebaseapp.com",
  projectId: "pankaj-bhaiya",
  storageBucket: "pankaj-bhaiya.appspot.com",
  messagingSenderId: "533060426132",
  appId: "1:533060426132:web:eb7ece7b6ff4420f331781"
});

    // Storage reference
    const storageRef = firebase.storage().ref('X');

    // Retrieve all images
    storageRef.listAll().then(function (result) {
      const promises = result.items.map((imageRef) => imageRef.getDownloadURL());
      Promise.all(promises).then((urls) => {
        setImageUrls(urls);
      }).catch((error) => {
        console.log(error);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }, []); // Empty dependency array means this effect runs only on component mount

  // Function to handle file input change
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // Function to handle upload
  const handleUpload = () => {
    if (selectedImage) {
      const storageRef = firebase.storage().ref('X');
      const uploadTask = storageRef.child(selectedImage.name).put(selectedImage);

      // Event listeners for upload progress and completion
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Upload complete, update image URLs
          storageRef.child(selectedImage.name).getDownloadURL()
            .then((url) => {
              setImageUrls((prevUrls) => [...prevUrls, url]);
              setSelectedImage(null);
              setUploadProgress(0);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      );
    }
  };

  // JSX return statement
  return (
    <main>
      <div className="TopHX">
        <p> Reflective Thought </p>
      </div>
      <div>
        <div className="OuterC">
          <input type="file" onChange={handleFileInputChange} />
          <button id="But02" onClick={handleUpload}>Upload</button>
          {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
        </div>
      </div>
      {imageUrls.length > 0 ? (
        imageUrls.map((url, index) => (
          <div key={index}>
            <p className="NumberX"> Image : {index + 1} </p>
            <img className="PhotoXX" src={url} alt={`Image ${index}`} style={{ width: '470px' }} />
          </div>
        ))
      ) : (
        <div className="LoadX"> Loading..........
          <div>
            <img className="PhotoXX" src={'IMG_20230606_080920(1).jpg'} style={{ width: '70px' }} />
          </div>
          Please Wait ⚙️
        </div>
      )}
    </main>
  );
}

// Export the Component4 component as default
export default Component4;
