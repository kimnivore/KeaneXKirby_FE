import React, { useState } from 'react';
import { useSpring, useSprings, animated, interpolate } from 'react-spring';
import '../styles/kirbies.css';
import Kirby1 from '../assets/IMG_3035.jpg';
import Kirby2 from '../assets/IMG_3036.jpg';
import Kirby3 from '../assets/IMG_3059.jpg';
import Kirby4 from '../assets/IMG_3060.jpg';

export default function Kirbies({ image, background }) {
    const [open, setOpen] = useState(false);
    const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
    const cards = useSprings(5, [0, 1, 2, 3, 4].map(item => ({ opacity: 0.2 + item / 5, z: open ? (item / 5) * 80 : 0 })));

    return (
        <div class="container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {cards.map(({ z, opacity }, index) => (
                <animated.div
                    style={{
                        opacity,
                        background,
                        transform: interpolate(
                            [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
                            (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
                        )
                    }}>
                    {index === 4 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={Kirby1} />}
                    </animated.div>
            ))}
        </div>
    )
}