import { CHANGE_INDEX } from "../actions";

const initialState = {
    quote: { q: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying 'I will try again tomorrow.'", a: "Mary Anne Radmacher" },
    color: "#94455c"
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INDEX:
            let a_quote = action.state.quote;
            let a_color = action.state.color;
            return { ...state, quote: a_quote, color: a_color };
        default: return state;
    }
};

export default appReducer;