// Display Object Reducer

export const displayObjectReducer = function( state, action ) {
    const { type, info } = action;
    switch( type ) {
        case "add":
            return [ ...state, info ];
        default:
            return state;
    }
}

// Keyframe Reducer

export const keyframeReducer = function( state, action ) {
    
}


// Global Reducer
export const globalReducer = function( state, action ) {
    const { type: _type } = action;
    const type = _type.split("/")[0];
    switch( type ) {
        case "display": 
            return { 
                ...state,
                display: displayObjectReducer( state.display, { ...action, type: _type.split("/")[1] } )
            };
        case "keyframe": 
            return { 
                ...state,
                keyframe: keyframeReducer( state.keyframe, { ...action, type: _type.split("/")[1] } )
            };
        default:
            return state;
    }
}