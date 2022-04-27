import React, { useState, useEffect } from 'react';
import Pinkheart from '../assets/pink-heart.png';
import Blackheart from '../assets/black-heart.png';
import '../styles/App.css';
import Heart from 'react-animated-heart';

export default function Hearts(props) {
    const [animation, setAnimation] = useState(0);
    const isLoading = props.isLoading;
    const [isClick, setClick] = useState(false);

    useEffect(() => {
        renderAnimations() 
    }, [isLoading]) 

    const renderHeart = () => {
        return isLoading ? Blackheart : Pinkheart
    }

    const renderAnimations = () => {
        return isLoading ? setAnimation(1) : setAnimation(0)
    }

    return (
        <>
            <img
            className='heart'
            isLoading={isLoading}
            src={renderHeart()}
            animation={animation}
            alt="heart"/>
        </>
    )
}