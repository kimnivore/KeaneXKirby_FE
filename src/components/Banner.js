import React from 'react';
import KeaneArt from '../assets/KeanesArt.png';
import Kirby from '../assets/Kirby16bit.png';
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

export default function Banner() {

    return (
        <div className="title">
            <img className="keane-art" src={KeaneArt} alt="Keane's rainbow chalk writing" />
            <p className="header gradient-text">Keane x Kirby</p>
            <Pulse><img className="kirby-16bit" src={Kirby} alt="Kirby the artist in 16 bit" /></Pulse>
        </div>
    )
}

