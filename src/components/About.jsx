import { useState, useEffect } from "react";
import Typewriter from "./Typewriter";
import WpContent from "./WpContent";
import mig from "../assets/mig.png";
import loui from "../assets/loui.png";
import { Link, animateScroll as scroll } from "react-scroll";
import waves from "../assets/waves.png";
import elefant from "../assets/elefant.png";
import fugl from "../assets/fugl.png";
import kanelsnegl from "../assets/kanelsnegl.png";
import negle1 from "../assets/negle1.png";
import negle2 from "../assets/negle2.png";
import negle3 from "../assets/negle3.png";
import negle4 from "../assets/negle4.png";


export default function About() {
    
    // Med indhold fra WordPress.

    const [posts, setposts] = useState([]);

    useEffect(() => {
        async function getPosts() {

            // const url = url'en fra hvor vi ser indlæggene i JSON format.
            // ?_embed&categories=9 for at vise indlæg med kategorinummer 9.
            const url = "https://wp.dkkristensen.dk/wp-json/wp/v2/posts?_embed&categories=9";
            const response = await fetch(url);
            const data = await response.json();
            setposts(data);
        }
        getPosts();

    // De tomme [] er for at stoppe useEffect, når den har kørt én gang. Ellers bliver den bare ved og ved.
    }, [])

    return (
        <section className="about" id="about">
            
            <h1 className="sectionHeader">Om mig</h1>


            {/* Typewriter - Jeg er... */}

            <div className="jegEr">
                <p className="jegErTxt">Jeg er</p>
                <Typewriter />
            </div>


            {/* Beskrivelse */}

            <div className="aboutDescription">
                {posts.map(post => (
                    <WpContent key={post.id} post={post} />
                ))}

                <img src={mig} alt="Billede af mig, der smiler" className="aboutImg" />
            </div>

            <div className="aboutDescription aboutLoui">

                <div className="aboutTxt louiTxt">
                    <p>
                        Du får også lige et par personlige detaljer om mig. Jeg er 25 og vokset op 
                        i hyggelige Galten, men kalder nu Viby mit hjem. Her bor jeg med min trofaste følgesvend Loui. 
                        Verdens største charmetrold.<br/><br/>

                        Engang spillede jeg badminton, men følger nu ivrigt med på sidelinjen. Jeg elsker at løbe, fordi 
                        det renser mit sind og giver energi. Og så er jeg vild med alt der hedder kreativitet og fordybelse 
                        med hoved og hænder.
                    </p>

                    <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className="projectLink aboutLink pcLink">Kontakt mig</Link>
                </div>

                <img src={loui} alt="Billede af min golden retreiver, Loui. Han ligger i grønt græs med en grøn bold mellem poterne" className="aboutImg" />

                <Link to="footer" spy={true} smooth={true} offset={-70} duration={500} className="projectLink aboutLink mobileLink">Kontakt mig</Link>
            </div>


            {/* Mine kreative hobbyer */}

            <img src={waves} alt="Lyserød bølge grafik" className="waves wavesProjects" />

            <div className="hobbies">

                <h2 className="subheader">Mine kreative hobbyer</h2>

                <div className="hobbyGallery">
                    
                    <div className="hobbyGallery1">
                        <img src={elefant} alt="Blyantstegning af en elefant" className="hobbyImg" />

                        <img src={kanelsnegl} alt="Farveblyantstegning af en kanelsnegl" className="hobbyImg" />
                    </div>

                    <div className="hobbyGallery2">
                        <img src={negle1} alt="Hånd med sart lyserød neglelak med regnbuer" className="hobbyImg" />

                        <div className="hobbyGallery3">
                            <img src={negle2} alt="Hånd med nude neglelak og grønne, lilla og sorte dekorationer i siden" className="hobbyImg hobbySmallImg" />

                            <img src={negle3} alt="Hånd med lysegrøn neglelak med mørkegrønne prikker og en hvid bølget linje" className="hobbyImg hobbySmallImg" />
                        </div>

                        <img src={negle4} alt="Hånd med gul neglelak med grønne palmeblade" className="hobbyImg" />

                        <img src={fugl} alt="Keramikmaling af en fugl på en gren på en dyb tallerken" className="hobbyImg" />
    
                    </div>

                </div>

            </div>

            <img src={waves} alt="Lyserød bølge grafik" className="waves wavesRotate" />

        </section>
    );

}
    
    
    
    



