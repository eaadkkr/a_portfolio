// Ikoner: https://mui.com/material-ui/material-icons/
import waves from "../assets/waves.png";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Phone from "@mui/icons-material/Phone";
import LinkedIn from "@mui/icons-material/LinkedIn";


export default function FrontPage() {
    return (
        <section className="frontpage" id="frontpage">

            <div className="mobileTxt">
                <h1 className="frontName">Dorthe Karina Kristensen</h1>
                <h2 className="frontTitle" id="frontTitle">Multimediedesigner</h2>
                <p className="frontQuote">Skal du være med til at forme den næste<br />multimediedesignstjerne?</p>
            </div>

            <div className="frontImg">
                <div className="pcTxt">
                    <h1 className="frontName">Dorthe Karina Kristensen</h1>
                    <h2 className="frontTitle" id="frontTitle">Multimediedesigner</h2>
                    <p className="frontQuote">Skal du være med til at forme den næste<br />multimediedesignstjerne?</p>
                </div>

                <img src={waves} alt="Lyserød bølge grafik" className="waves wavesFront" />
            </div>

            <div className="contact">
                <a href="mailto:dorthe.k.k@hotmail.com" className="contactLink" id="mail"><EmailOutlined className="contactIcon"/>dorthe.k.k@hotmail.com</a>
                <a href="tel:42338896" className="contactLink" id="tel"><Phone className="contactIcon"/>42 33 88 96</a>
                <a href="https://www.linkedin.com/in/dorthe-karina-kristensen-3928aa24b/" className="contactLink"><LinkedIn className="contactIcon"/>Dorthe Karina Kristensen</a>
            </div>

            <img src={waves} alt="Lyserød bølge grafik" className="waves wavesRotate" />



        </section>
    )
}