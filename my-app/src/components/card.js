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


//<FontAwesomeIcon icon={['fad', 'coffee']} />


class Card extends React.Component {


    render() {
        const { index, onChange, color } = this.props;
        const quotes = [
            { quote: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
            { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
            { quote: "It's not that I'm so smart, it's just that I stay with problems longer.", author: "Albert Einstein" },
            { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
            { quote: "Failure is only the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
            { quote: "A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying.e", author: "B.F. Skinner" },
            { quote: "Ask yourself this question: 'Will this matter a year from now?'", author: "Richard Carlson" },
            { quote: "What if I told you that 10 years from now, your life would be exactly the same? I doubt you'd be happy. So, why are you so afraid of change?", author: "Karen Salmansohn" },
            { quote: "It does not matter how slowly you go so long as you do not stop.", author: "Confucius" },
            { quote: "Never confuse a single defeat with a final defeat.", author: "F. Scott Fitzgerald" },
            { quote: "Perseverance is the hard work you do after you get tired of doing the hard work you already did.", author: "Newt Gingrich" },
            { quote: "Through perseverance many people win success out of what seemed destined to be certain failure.", author: "Benjamin Disraeli" },
            { quote: "Success seems to be largely a matter of hanging on after others have let go.", author: "William Feather" },
            { quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
        ];
        return (
            <div id="quote-box" className="card">
                <div id="text" className="card-body" style={{ color: color }}>
                    <FontAwesomeIcon icon={faQuoteLeft} style={{marginRight: "7px"}}/>    {quotes[index].quote}
                </div>
                <div id="author" style={{ color: color, display: "flex", justifyContent: "end" }}>
                    - {quotes[index].author}
                </div>
                <section>
                    <div className="socialMediaBoxes">
                        <a className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTwitterSquare} style={{ color: color }} size="2x"/></a>
                        <a className="links" href="twitter.com/intent/tweet" target="_blank" ><FontAwesomeIcon icon={faTumblrSquare} style={{ color: color }} size="2x"/></a>
                    </div>
                    <button onClick={onChange} id="new-quote" style={{ backgroundColor: color }}>New quote</button>
                </section>

            </div>);
    }
}

export default Card;