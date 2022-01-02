import { createContext } from "react";


// Display object - State Context
const initDisplayObjects = [];

// Keyframe - State Context
const initKeyframe = {
    total_time: 5,
    time_splition: 1,
    interval: null
};

// Global State/Dispatch Context
export const globalInitState = {
    display: initDisplayObjects,
    keyframe: initKeyframe
}
export const globalStateContext = createContext(globalInitState);
export const globalDispatchContext = createContext();
