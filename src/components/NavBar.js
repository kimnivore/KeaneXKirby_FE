import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../styles/App.css';

export default function NavBar() {
    return (
    <div className="Nav">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/kirbies">Gallery</Link>
      </div>
    )
}