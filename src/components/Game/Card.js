import React  from 'react';
import '../../styles/App.css';
import KirbyPaints from '../../assets/KirbyPaint.png';


export default function Card (props) {

    const handleChoice = () => {
        if (!props.disabled)
            props.handleChoice(props.card);
    }

    return (
        <div className='card'>
            <div className={props.flipped ? "flipped" : ""}>
                <img className={`front ${props.card.matched ? "matched" : ''}`} src={props.card.src} alt="Kirby and his frenemies" />
                <img className='back' src={KirbyPaints} alt="Kirby paints" onClick={() => handleChoice()} />
            </div>
        </div>
    );
}
