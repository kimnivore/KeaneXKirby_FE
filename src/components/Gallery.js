import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/App.css';
import { Card, Image, Tooltip } from 'antd';

const { Meta } = Card;

const animateList = [ 
    { title: 'Kirby, look at this', description: "Blue crayon on red construction paper", image: 'Kirby1' },
    { title: 'Kirby, do not look at this', description: "#2 pencil on pink construction paper", image: 'Kirby2' },
    { title: 'Kirby, I love you', description: "Red crayon on blue construction paper", image: 'Kirby3' },
    { title: 'Kirby, take a picture of this', description: "Red colored pencil on white construction paper", image: 'Kirby4' },
    { title: 'I ❤️ Kirby so much', description: "Black marker on post-it note with Avery Label #8160", image: 'Kirby5'},
];
export default function Gallery() {
        return (
            <div>
                {animateList.map((item, key) => (
                    <Tooltip placement="right" color="#ff477e" title="scroll to view">
                    <div className="block" key={item.title}>
                        <Fade top>
                            <Card 
                                hoverable
                                className="pic"
                                cover={
                                    <Image 
                                        src={require('../assets/' + item.image + '.png')}
                                        alt={item.title}/>}
                                    >
                                    <Meta title={item.title} description={item.description} />
                            </Card>
                        </Fade>  
                    </div>
                    </Tooltip> 
                 ))}
            </div>
        )
    }


