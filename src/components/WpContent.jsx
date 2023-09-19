// Komponent til indhold fra WordPress.

// For at kunne læse html-koden fra vores JSON-side:
// I terminal: npm i html-react-parser

import parse from "html-react-parser";

export default function WpContent( { post } ) {

    return (
        <div className="wpContent">
            <h2 className="aboutHeader">{parse(post.title.rendered)}</h2>
            <div className="aboutTxt wpTxt">{parse(post.content.rendered)}</div>
        </div>
    )
}