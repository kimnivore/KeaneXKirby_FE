import React from 'react';
import KeaneArt from '../assets/KeanesArt.png';
import Kirby from '../assets/Kirby16bit.png';
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import Heart from './Heart';

const Pulse = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

export default function Banner(props) {

    const isLoading = props.isLoading;

    return (
        <div className="title">
            <img className="keane-art" src={KeaneArt} alt="Keane's rainbow chalk writing" />
           <Heart isLoading={isLoading}/>
            <Pulse><img className="kirby-16bit" src={Kirby} alt="Kirby the artist in 16 bit" /></Pulse>
        </div>
    )
}

