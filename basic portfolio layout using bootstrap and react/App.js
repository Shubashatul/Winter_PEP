import React from 'react';
import './App.css';  
import Hero from './Component/Hero';
import Header from './Component/Header';
import Footer from './Component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchResources from './Component/FetchRecources';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
      {/* <FetchResources></FetchResources> */}
    </div>
  );
}

export default App;
