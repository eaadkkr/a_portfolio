// Kilde: https://www.datainfinities.com/42/create-a-scroll-to-top-button-in-react

import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop}>
            <FaArrowCircleUp className='arrow'/>
        </button>
    );
}

export default ScrollToTop;