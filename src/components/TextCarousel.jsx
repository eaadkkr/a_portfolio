import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from "../assets/quote.png";

const TextCarousel = () => {
  const settings = {
    dots: true, // Vis prikker til navigation
    infinite: true, // Muliggør uendelig rulning
    speed: 1000, // Overgangshastighed i millisekunder
    slidesToShow: 1, // Antal synlige billeder på en gang
    slidesToScroll: 1, // Antal billeder, der rulles ad gangen
    autoplay: true, // Automatisk afspilning
    autoplaySpeed: 5000, // Tid mellem automatiske skift (i millisekunder)
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className="slider">
        <div className="statementContainer">
          <h2 className="statementName">Rikke Stenholt</h2>
          <p className="statementTitle">Samarbejdspartner i 2. semester eksamensprojekt</p>
          <p className="statementTxt">
            Dorthe var altid velforberedt og punktlig til vores møder, hvilket gjorde processen glidende og 
            effektiv. Hun udfordrede mig på en måde, der skubbede grænser, men aldrig følte jeg mig presset for 
            hårdt. <br/><br/>

            Udover hendes faglige dygtighed var Dorthe også behagelig og imødekommende at snakke med. 
            Samarbejdet var dermed både produktivt og fornøjeligt, og jeg var mere end tilfreds med resultatet.
          </p>
          <img src={quote} alt="Orange citationstegn" className="quoteImg" />
        </div>

        <div className="statementContainer">
            <h2 className="statementName">Amalie Vestergaard</h2>
            <p className="statementTitle">Projektmakker i 4 projekter</p>
            <p className="statementTxt">
                Dorthe er den perfekte projektmakker. Hun er nem og hyggelig at snakke og samarbejde med. 
                Hun er mødestabil og utroligt produktiv. <br/><br/>
            
                Dorthe leverer altid vores aftalte opgaver til tiden og går ofte ud over forventningerne. 
                Hun tager som regel lederrollen og sørger for, at hele projektet kører på skinner. Dorthe er 
                en struktureret og sød person, der bare er så rar at arbejde sammen med.
            </p>
            <img src={quote} alt="Orange citationstegn" className="quoteImg" />
        </div>

        <div className="statementContainer">
        <h2 className="statementName">Pia Weedfald Hansen</h2>
            <p className="statementTitle">Tidligere arbejdsgiver, skoleleder på Gyvelhøjskolen</p>
            <p className="statementTxt">
                Dorthe er særdeles tjenestevillig, flittig og ordentlig og ser en ære i at gøre tingene færdige 
                fra start til slut. Dorthe har et godt samarbejde med skolens faste personale, og er vellidt af 
                både ledelse, personale og elever. <br/><br/>

                Vi har med ovenstående selvsagt været utrolig glade for at have Dorthe ansat på Gyvelhøjskolen 
                og jeg kan kun give Dorthe mine allerbedste anbefalinger.
            </p>
            <img src={quote} alt="Orange citationstegn" className="quoteImg" />
        </div>
      </Slider>
    </div>
  );
};

export default TextCarousel;