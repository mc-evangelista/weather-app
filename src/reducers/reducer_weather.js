import { FETCH_WEATHER } from '../actions/index';

//state, action
//return state
export default function(state=[],action){
    //console.log("Reducer: action received not a string: ",action);
    switch(action.type){
    case FETCH_WEATHER:
        //return [action.payload.data, ...state]; //avoid adding to much space when returning state
        //push(mutate state) - open huge can of worms - NEVER PUSH to manipulate
        //can use concat - new instance
        return[   
            action.payload.data,
            ...state
        ];
        //es6 rest parameter
    }
    return state;
}
//add to combined reducer

/*
action - normally a holds the payload with text, other props
action - if promise payload, stop the action , after the request is done, create a NEW action and sends it to reducers
redux-promise - looks at [payload] property (if payload is promise, redux-promise stops the action entirely)
once finished, dispatch/create a new action with same type, 
but with payload of the RESULT request 
unwraps the PROMISE
*/
