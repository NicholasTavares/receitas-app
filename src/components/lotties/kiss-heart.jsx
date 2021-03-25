import React, { useEffect, useRef } from 'react';
import './anime.css'
import lottie from 'lottie-web';
import Kiss from './kiss-of-the-heart.json'
function Anime() {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Kiss
        })
    }, [])

    return (
        <div className="container-anime">
            <div style={{ width: '200px' }} ref={container}></div>
        </div>
    );
}

export default Anime;