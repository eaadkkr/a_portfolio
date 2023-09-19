import waves from "../assets/waves.png";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import Phone from "@mui/icons-material/Phone";
import LinkedIn from "@mui/icons-material/LinkedIn";


export default function Footer() {
    return (
        <footer className="footer" id="footer">

            <img src={waves} alt="Lyserød bølge grafik" className="waves" />

            <div className="contact">
                <a href="mailto:dorthe.k.k@hotmail.com" className="contactLink" id="mail"><EmailOutlined className="contactIcon"/>dorthe.k.k@hotmail.com</a>
                <a href="tel:42338896" className="contactLink" id="tel"><Phone className="contactIcon"/>42 33 88 96</a>
                <a href="https://www.linkedin.com/in/dorthe-karina-kristensen-3928aa24b/" className="contactLink" id="linkedin"><LinkedIn className="contactIcon"/>Dorthe Karina Kristensen</a>
            </div>

        </footer>
    )
}