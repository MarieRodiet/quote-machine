/*Reducers are functions that update your store, depending on the actions that were sent. 
When you use the dispatch function to dispatch an action, 
you are sending the information to the reducer.
*/
const color =
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

const i = 4;

/**const state = {
 * index: 1
    quote: "",
    color: "", 
} */
const appReducer = (state = {
    index: 4,
    quote: quotes[i],
    color: color[i]
}, action) => {
    switch (action.type) {
        //return a random quote and new color theme
        case 'CHANGE_INDEX':
            let newIndex = Math.floor(Math.random() * 14);
            let newState = {
                index: newIndex,
                quote: this.quotes[newIndex],
                color: this.color[newIndex]
            }
            return { newState };
        default: return state;

    }
};

export default appReducer;