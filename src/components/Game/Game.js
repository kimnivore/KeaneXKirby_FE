import React, { useEffect, useState } from 'react';
import '../../styles/App.css';
import Card from './Card';
import { Button } from 'antd';

const initialCards = [
    { "src": "/images/Kirby.png", matched: false },
    { "src": "/images/Knight.png", matched: false },
    { "src": "/images/Dedede.png", matched: false },
    { "src": "/images/Poppy.png", matched: false },
    { "src": "/images/WaddleDee.png", matched: false },
    { "src": "/images/Joe.png", matched: false },
]

export default function Game() {
    const [cards, setCards] = useState([]);
    const [turn, setTurn] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [startFlip, setStartFlip] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setStartFlip(false)
      }, 1000);
      shuffleCards();
    }, []);
  
    function shuffleCards() {
      const shuffledCards = [...initialCards, ...initialCards]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
  
      setChoiceOne(null)
      setChoiceTwo(null)
      setCards(shuffledCards);
      setTurn(0);
      setDisabled(false)
      setStartFlip(true)
      setTimeout(() => {
        setStartFlip(false)
      }, 1000);
    }
  
    function handleChoice(card) {
      choiceOne ? (
        choiceOne.id !== card.id &&
        setChoiceTwo(card))
        : setChoiceOne(card)
    }
  
    function resetTurn() {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurn(prevTurn => prevTurn + 1)
      setDisabled(false)
    }
  
    useEffect(() => {
      if (choiceOne && choiceTwo) {
        setDisabled(true);
        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true }
              } else {
                return card
              }
            })
          })
          resetTurn();
        } else {
          setTimeout(() => {
            resetTurn();
          }, 1000);
        }
      }
    }, [choiceOne, choiceTwo]);

    const handleRestart = () => { 
        setTurn(0);
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(true);
        setStartFlip(true);
        setCards([]);
        shuffleCards();
    }
  
    return (
      <div className='container'>
        <h2>Play the Kirby & Frenemies Flip card game</h2>
        <div> Select matching cards until the board is cleared</div>
        <Button onClick={shuffleCards} className='cta-button connect-wallet-button'>
            New Game
        </Button>
        <div className="grid">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
              disabled={disabled}
              matched={card.matched}
            />
          ))}
        </div>
        <div className='moves'>Moves: {turn}</div>
        <Button className="cta-button connect-wallet-button" onClick={handleRestart}>
          Restart
        </Button>
      </div>
    );
  }