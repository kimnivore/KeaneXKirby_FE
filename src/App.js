import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
// import { ethers } from 'ethers';
// import KeanesNFT from  './utils/KeanseNFT.json';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import NFT from './components/NFT';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Game from './components/Game/Game';
import './styles/App.css';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <NavBar/>
      <div >
        <Routes>
          <Route path='NFT' element={<NFT />} />
          <Route path='Game' element={<Game />} />
          <Route path='Gallery' element={<Gallery />} />
          <Route path='/' element={<Home isLoading={isLoading}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
