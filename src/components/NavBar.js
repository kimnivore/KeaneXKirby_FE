import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


export default function NavBar() {
    return (
    <div className="navbar">
      <Link className="header gradient-text" to='/'>Keane x Kirby Collection</Link>
      <div className="Nav">
        <Link className="navlink" to="/">Home</Link>
          <Link className="navlink" to="/nft">Mint NFT</Link>
          <Link className="navlink" to="/gallery">Gallery</Link>
          <Link className="navlink" to="/game">Game</Link>
      </div>
    </div>
    )
}