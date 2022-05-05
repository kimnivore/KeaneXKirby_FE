import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Wallpaper from '../assets/kirby-30th-wallpaper.png';

export default function NavBar() {
    return (
    <div className="navbar">
      <div className="header gradient-text">Keane x Kirby Collection</div>
      <div className="Nav">
          <Link className="navlink" to="/">Home</Link>
          <Link className="navlink" to="/kirbies">Gallery</Link>
      </div>
    </div>
    )
}