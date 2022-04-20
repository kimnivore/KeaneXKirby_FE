import React, { useState, useEffect } from 'react';
import Whiteheart from '../assets/white-heart.png';
import Pinkheart from '../assets/pink-heart.png';


export default function Heart(props) {
    const [animation, setAnimation] = useState(0)
    const isLoading = props.isLoading

    useEffect(() => {
        renderAnimations()
    }, [isLoading])

    const renderHeart = () => {
        return isLoading ? Whiteheart : Pinkheart
    }

    const renderAnimations = () => {
        return isLoading ? setAnimation(1) : setAnimation(0)
    }

    return (
        <img
        className='heart'
        isLoading={isLoading}
        src={renderHeart()}
        animation={animation}
        alt="heart"/>
    )
}