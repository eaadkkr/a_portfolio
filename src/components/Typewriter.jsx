// Kilde: https://www.youtube.com/watch?v=1eXQJYL1s1k

import TypewriterEffect from 'typewriter-effect';

export default function Typewriter() {

    return (
        <div className='typewriter'>
            <TypewriterEffect
                onInit={(typewriter) => {
                typewriter.typeString("selvstændig").pauseFor(500).deleteAll()
                .typeString("kreativ").pauseFor(500).deleteAll()
                .typeString("initiativrig").pauseFor(500).deleteAll()
                .typeString("lærevillig").pauseFor(500).deleteAll()
                .typeString("ansvarsbevidst").pauseFor(500).deleteAll()
                .start();
            }}
            options={{ loop: true }}          
            />
        </div>
    );
}

