import React, { useEffect, useState } from 'react';
import '../../styles/App.css';
import Card from './Card';

const imagesArray = [
    { type: 'Kirby', image: require(``) },
    { type: 'Dark Meta Knight', image: require(``) },
    { type: 'King Dedede', image: require(``) },
    { type: 'Poppy Bros Jr', image: require(``) },
    { type: 'Bandana Waddle Dee', image: require(``) },
    { type: 'Knuckle Joe', image: require(``) },
]

function shuffle(imagesArray) {
    for(let i = imagesArray.length; i > 0; i--) {
        const random = Math.floor(Math.random() * i);
        const current = i - 1;
        const temp = imagesArray[current];
        imagesArray[current] = imagesArray[random];
        imagesArray[random] = temp;
    }
    return imagesArray;
}
export default function Game() {
    const [cards, setCards] = useState(shuffle.bind(null, imagesArray.concat(imagesArray)));
    const [open, setOpen] = useState([]);
    const [clear, setClear] = useState({});
    const [disable, setDisable] = useState(false);

 
    
}