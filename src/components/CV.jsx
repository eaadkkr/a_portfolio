import TextCarousel from "./TextCarousel";
import Timeline from "./Timeline";


export default function CV() {

    return (
        <section className="cv" id="cv">

            <h1 className="sectionHeader">CV</h1>

            <div className="timeline">
                <Timeline />
            </div>

            <h2 className="subheader">Udtalelser</h2>

            <div className="statements">
                <TextCarousel />
            </div>

        </section>
    )
}