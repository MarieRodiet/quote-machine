import { CHANGE_INDEX } from './actions';

export const changeIndex = (index) => {
    console.log("inside changeIndex action creator: " + index);
    const colors =
        ["#94455c",
            "#2596BE",
            "#Be4f25",
            "#7f1472",
            "#7e9085",
            "#6d78d0",
            "#222969",
            "#226944",
            "#Be4f25",
            "#7f1472",
            "#2596be",
            "#F9b2b2",
            "#F36062",
            "#54a473"];

    const quotes = [
        { q: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'", a: "Mary Anne Radmacher" },
        { q: "Fall seven times and stand up eight.", a: "Japanese Proverb" },
        { q: "It's not that I'm so smart, it's just that I stay with problems longer.", a: "Albert Einstein" },
        { q: "Many of life's failures are people who did not realize how close they were to success when they gave up.", a: "Thomas Edison" },
        { q: "Failure is only the opportunity to begin again, this time more intelligently.", a: "Henry Ford" },
        { q: "A failure is not always a mistake. It may simply be the best one can do under the circumstances. The real mistake is to stop trying.e", a: "B.F. Skinner" },
        { q: "Ask yourself this question: 'Will this matter a year from now?'", a: "Richard Carlson" },
        { q: "What if I told you that 10 years from now, your life would be exactly the same? I doubt you'd be happy. So, why are you so afraid of change?", a: "Karen Salmansohn" },
        { q: "It does not matter how slowly you go so long as you do not stop.", a: "Confucius" },
        { q: "Never confuse a single defeat with a final defeat.", a: "F. Scott Fitzgerald" },
        { q: "Perseverance is the hard work you do after you get tired of doing the hard work you already did.", a: "Newt Gingrich" },
        { q: "Through perseverance many people win success out of what seemed destined to be certain failure.", a: "Benjamin Disraeli" },
        { q: "Success seems to be largely a matter of hanging on after others have let go.", a: "William Feather" },
        { q: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", a: "Dale Carnegie" },
    ];
    console.log({
        quote: { ...quotes[index] },
        color: colors[index]
    });
    return {
        type: CHANGE_INDEX,
        state: {
            quote: { ...quotes[index] },
            color: colors[index]
        }

    }

}