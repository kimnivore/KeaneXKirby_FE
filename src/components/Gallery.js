import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
// import Kirby1 from '../assets/IMG_3035.png';
// import Kirby2 from '../assets/IMG_3036.jpg';
// import Kirby3 from '../assets/IMG_3059.jpg';
// import Kirby4 from '../assets/IMG_3060.jpg';

const animateList = [ 
    { title: 'Kirby1', image: 'Kirby1' },
    { title: 'Kirby2', image: 'Kirby2' },
    { title: 'Kirby3', image: 'Kirby3' },
    { title: 'Kirby4', image: 'Kirby4' }
];

export default class ReactReveal extends Component {
    render() {
        return (
            <Fragment>
                {animateList.map((item, key) => (
                    <div style={styles.block} key={key}>
                        <Fade top>
                            <img 
                                style={styles.pic} 
                                src={require('../assets/' + item.image + '.png') }
                                alt={item.title}
                            />
                        </Fade>
                    </div>
                 ))}
            </Fragment>
        )
    }
}

const styles = {
    block: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: '100%',
        background:'#000',
        borderBottom: '1px solid rgba(255,255,255,.2)',
    },
    pic: {
        width: '30%',
        height: 'auto',
        margin: '20px',
    }
}
