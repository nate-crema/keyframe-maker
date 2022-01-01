import { DisplayObject, Ball } from "../class/DisplayObject";

// Display Object Reducer

export const displayObjectReducer = function( state, action ) {
    const { type, id } = action;
    switch( type ) {
        case "add":
            return [ ...state, id ]
        default:
            return state;
    }
}