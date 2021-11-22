import React from 'react';
import './card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitterSquare,
    faTumblrSquare
} from "@fortawesome/free-brands-svg-icons";
import {
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";



class Card extends React.Component {
    render() {
        const { quote, onChange, c } = this.props;

        return (
            <div id="quote-box" className="card">
                <div id="text" className="card-body" style={{ color: c }}>
                    <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "7px" }} />    {quote.q}
                </div>
                <div id="author" style={{ color: c, display: "flex", justifyContent: "end" }}>
                    - {quote.a}
                </div>
                <section>
                    <div className="socialMediaBoxes">
                        <a className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} style={{ color: c }} size="2x" /></a>
                        <a className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTumblrSquare} style={{ color: c }} size="2x" /></a>
                    </div>
                    <button onClick={onChange} id="new-quote" style={{ backgroundColor: c}}>New quote</button>
                </section>

            </div>);
    }
}

export default Card;