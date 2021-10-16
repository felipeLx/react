import * as actionType from './actions';

const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter -1
            }
        case actionType.ADDCOUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionType.SUBCOUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(
                    {id: new Date(),value: state.counter}
                    )
            }
        case actionType.DELETE_RESULT:
            const newArray = state.results.filter(
                result => result.id !== action.resultElId
            );
            return {
                ...state,
                results: newArray
            }        
        default:
            return state;    
    }
    
};

export default reducer;
