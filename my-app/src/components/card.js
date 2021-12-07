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
        const { onChange, quote, color } = this.props;
        return (
            <div id="quote-box" className="card">
                <div id="text" className="card-body" style={{ color: color }}>
                    <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "7px" }} />    {quote.q}
                </div>
                <div id="author" style={{ color: color, display: "flex", justifyContent: "end" }}>
                    - {quote.a}
                </div>
                <section>
                    <div className="socialMediaBoxes">
                        <a id="tweet-quote" className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} style={{ color: color }} size="2x" /></a>
                        <a className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTumblrSquare} style={{ color: color }} size="2x" /></a>
                    </div>
                    <button onClick={onChange} id="new-quote" style={{ backgroundColor: color }}>New quote</button>
                </section>
            </div>);
    }
}
export default Card;