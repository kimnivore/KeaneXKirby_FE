import React, { useState, useEffect } from 'react';
import Pinkheart from '../assets/pink-heart.png';
import Blackheart from '../assets/black-heart.png';
import '../styles/App.css';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';
const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default function Hearts(props) {
    const [animation, setAnimation] = useState(0);
    const isLoading = props.isLoading;
   

    useEffect(() => {
        renderAnimations() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]) 

    const renderHeart = () => {
        return isLoading ? Blackheart : Pinkheart
    }

    const renderAnimations = () => {
        return isLoading ? setAnimation(1) : setAnimation(0)
    }

    return (
        <>
        <Bounce>
            <img
            className='heart'
            isLoading={isLoading}
            src={renderHeart()}
            animation={animation}
            alt="heart"/>
        </Bounce>
        </>
    )
}