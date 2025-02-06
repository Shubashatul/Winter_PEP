import React from 'react';
import './App.css';  
import Hero from './Component/Hero';
import Header from './Component/Header';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchResources from './Component/FetchRecources';
import FocousInputUseRef from './Component/FocousInputUseRef';

import PreviousInputRef from './Component/PreviousCountUseRef';
import SignupForm from './Component/SignupForm';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hero />
      <Footer /> */}
      {/* <FetchResources></FetchResources> */}
      

      {/* <FocousInputUseRef></FocousInputUseRef> */}
      {/* <PreviousInputRef/> */}
      <SignupForm/>

      
    </div>
  );
}

export default App;
