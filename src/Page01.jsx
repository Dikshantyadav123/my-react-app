import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Physics from './Physics';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
// Make sure TextUploader is defined and imported correctly
import TextUploader from './TextUploader'; // Adjust the path as needed
// ...<TextUploader />

import  './Page01.css';

const Page01 = () => {
  return (
    <>    
      
                            

      <div ClassName="Ana1">   
        

        <div ClassName="Ana2">    
          <div  ClassName="Ana3">   

    <Router>

      <div>
        


        <NavBar />

        
        <Routes>
          <Route path="/Physics" element={<Physics />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="/component4" element={<Component4 />} />
          <Route path="/component5" element={<Component5 />} />
          <Route path="/TextUploader" element={<TextUploader />} />
        </Routes>

        
      </div>
    </Router>
      
      
      </div>
  </div>
  </div>
      
      </>
  );
};

export default Page01;
