import { createContext } from "react";


// Display object - State Context
const initDisplayObjects = [];
export const displayObjectState = createContext(initDisplayObjects);

// Display object - Dispatch Context
export const displayObjectDispatch = createContext();