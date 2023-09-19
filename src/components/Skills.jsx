import Code from '@mui/icons-material/Code';
import Create from '@mui/icons-material/Create';
import Web from '@mui/icons-material/Web';

import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import reactImg from '../assets/react.png';
import wp from '../assets/wordpress.png';
import figma from '../assets/figma.png';
import xd from '../assets/adobeXd.png';
import illustrator from '../assets/illustrator.png';
import ps from '../assets/photoshop.png';
import canva from '../assets/canva.png';

import waves from "../assets/waves.png";
import stenholt from "../assets/stenholt.png";
import webdok from "../assets/webdok.png";
import medova from "../assets/medova.png";

export default function Skills() {
    return (
        <section className="skills section" id="skills">

            <h1 className="sectionHeader">Mine færdigheder</h1>



            {/* FÆRDIGHEDER */}

            <div className="skillsList">

                <div className="skill">
                    <Code fontSize="large" className="skillIcon"/>
                    <p className='skillName'>Frontendudvikling</p>
                </div>                

                <div className="skill">
                    <Web fontSize="large" className="skillIcon"/>
                    <p className='skillName'>UX & UI design</p>
                </div>

                <div className="skill">
                    <Create fontSize="large" className="skillIcon"/>
                    <p className='skillName'>Indholdsproduktion</p>
                </div>
                
            </div>



            {/* PROGRAMMER */}

            <h2 className='subheader'>Programmer jeg bruger hertil</h2>

            <div className='programs'>

                <div className='program'>
                    <img src={html} alt="HTML logo" className="programLogo" />
                    <p className='programName'>HTML</p>
                </div>

                <div className='program'>
                    <img src={css} alt="CSS logo" className="programLogo" />
                    <p className='programName'>CSS</p>
                </div>

                <div className='program'>
                    <img src={js} alt="JavaScript logo" className="programLogo" />
                    <p className='programName'>JavaScript</p>
                </div>

                <div className='program'>
                    <img src={reactImg} alt="React logo" className="programLogo" />
                    <p className='programName'>React</p>
                </div>

                <div className='program'>
                    <img src={wp} alt="WordPress logo" className="programLogo" />
                    <p className='programName'>WordPress</p>
                </div>

                <div className='program'>
                    <img src={figma} alt="Figma logo" className="programLogo" />
                    <p className='programName'>Figma</p>
                </div>

                <div className='program'>
                    <img src={xd} alt="Adobe XD logo" className="programLogo" />
                    <p className='programName'>Adobe XD</p>
                </div>

                <div className='program'>
                    <img src={illustrator} alt="Adobe Illustrator logo" className="programLogo" />
                    <p className='programName'>Illustrator</p>
                </div>

                <div className='program'>
                    <img src={ps} alt="Adobe Photoshop logo" className="programLogo" />
                    <p className='programName'>Photoshop</p>
                </div>

                <div className='program'>
                    <img src={canva} alt="Canva logo" className="programLogo" />
                    <p className='programName'>Canva</p>
                </div>
            </div>



            {/* PROJEKTER */}

            <img src={waves} alt="Lyserød bølge grafik" className="waves wavesProjects" />

            <div className='projects'>

                <h2 className='subheader'>Projekter hvor jeg har brugt det</h2>

                <div className='projectsList'>
                    <div className='projectInfo'>
                        <h3 className='projectHeader'>Stenholt Glas</h3>
                        <p className='projectTxt'>
                            Eksamensprojekt, 2. semester, 2023 <br />
                            Antal gruppemedlemmer: 2 <br />
                            Karakter: 12 <br /><br />

                            Her samarbejdede vi med glaspuster Rikke Stenholt om redesign af hendes hjemmeside. 
                            Projektet var en kulmination på alt, vi havde lært. Men inkluderede som nyt 
                            udarbejdelse af et <span className='boldTxt'>Experience Map</span>, <span className='boldTxt'>userflow</span> og en <span className='boldTxt'>style guide</span>, 
                            samt fokus på <span className='boldTxt'>UX copywriting</span>. Derudover tog vi selv en række <span className='boldTxt'>produktbilleder</span>.
                        </p>
                        <a href='https://dkkristensen.dk/stenholt.glas/' target="_blank" className='projectLink'>Besøg siden</a>
                    </div>

                    <img src={stenholt} alt='Collage af billeder af produkter fra Stenholt Glas taget i naturen' className='projectImg'/>
                </div>

                <div className='projectsList'>
                    <div className='projectInfo' id='webdokInfo'>
                        <h3 className='projectHeader'>Anders svømmer 116 km fra Danmark til Sverige</h3>
                        <p className='projectTxt'>
                            Webdokumentar, 2. semester, 2023 <br />
                            Antal gruppemedlemmer: 2 <br />
                            Feedback: Stor ros <br /><br />

                            En webdokumentar om Anders og hans vilde svømmehistorie. Fokus var <span className='boldTxt'>storytelling</span>. 
                            Derudover baserede vi <span className='boldTxt'>personaer</span> på <span className='boldTxt'>segmentering</span>, 
                            arbejdede med <span className='boldTxt'>Empathy Map</span>, <span className='boldTxt'>The Golden Circle – The Why</span>, <span className='boldTxt'>Sweetspot</span> og <span className='boldTxt'>tone of voice</span> i vores forarbejde. 
                            Samt et <span className='boldTxt'>storyboard</span> til en <span className='boldTxt'>video</span>, vi filmede.
                        </p>
                        <a href='https://dkkristensen.dk/webdoc/' target="_blank" className='projectLink'>Besøg siden</a>
                    </div>

                    <img src={webdok} alt='Screenshots af én af siderne fra min webdokumentar' className='projectImg' id='webdokImg'/>
                </div>

                <div className='projectsList'>
                    <div className='projectInfo'>
                        <h3 className='projectHeader'>Medova Te</h3>
                        <p className='projectTxt'>
                            Eksamensprojekt, 1. semester, 2022 <br />
                            Individuel opgave <br />
                            Karakter: 12 <br /><br />

                            Her henvender jeg Medova Te til en ny målgruppe, studerende. Forarbejdet bestod i at 
                            lave <span className='boldTxt'>brugerinterviews</span>, <span className='boldTxt'>mindmap</span>, <span className='boldTxt'>Value Proposition Canvas</span> og 
                            en <span className='boldTxt'>persona</span>. <br /><br />

                            <span className='boldTxt'>Moodboards</span> og <span className='boldTxt'>style tiles</span> hjalp med at definere 
                            det visuelle udtryk, mens <span className='boldTxt'>usability-tests</span> og et <span className='boldTxt'>IA-diagram</span> baseret på <span className='boldTxt'>kortsortering</span> optimerede 
                            brugeroplevelsen. Hjemmesiden er <span className='boldTxt'>responsiv</span> og jeg har selv produceret <span className='boldTxt'>indhold</span> og 
                            lavet <span className='boldTxt'>logo</span>.
                        </p>
                        <a href='https://dkkristensen.dk/eksamen_medova/' target="_blank" className='projectLink'>Besøg siden</a>
                    </div>

                    <img src={medova} alt='Forsiden af min Medova Te hjemmeside vist på pc-, tablet- og mobilskærm' className='projectImg' />
                </div>
            </div>

            <img src={waves} alt="Lyserød bølge grafik" className="waves wavesRotate" />




        </section>
    )
}