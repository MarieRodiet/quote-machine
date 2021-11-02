/*Reducers are functions that update your store, depending on the actions that were sent. 
When you use the dispatch function to dispatch an action, 
you are sending the information to the reducer.
*/
const appReducer = (state = 0, action) => {
    switch (action.type) {
        //return a random quote and new color theme
        case 'CHANGE_INDEX':
            return {
                index: action.index
            };
        default: return state;

    }
};

export default appReducer;