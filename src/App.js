import { useState, useEffect, useRef, useReducer } from 'react';

// components
import Keyframe from "./components/Keyframe";
import Display from "./components/Display";

// contexts
import { displayObjectState, displayObjectDispatch } from './global/Context';
import { displayObjectReducer } from './global/Reducer';

// css
import "./css/global.css";
import "./css/components/App.css";

function App({ props }) {

  // grid size states
  const [ display_rate, setDisplayRate ] = useState(0.65);
  const [ keyframe_rate, setKeyframeRate ] = useState(0.35);
  
  const [ uiarea_rate, setUIAreaRate ] = useState(0.75);
  const [ codearea_rate, setCodeAreaRate ] = useState(0.25);

  // global contexts
  const objects_init = [];
  const [ objects_state, objectDispatch ] = useReducer( displayObjectReducer, objects_init );

  return <div className="main-wrap"
    style={{
      gridTemplateColumns: `${ uiarea_rate * 100 }% ${ codearea_rate * 100 }%`
    }}
  >
    <div className="ui-area" style={{
      gridTemplateRows: `${ display_rate * 100 }% ${ keyframe_rate * 100 }%`,
    }}>
      <displayObjectDispatch.Provider value={ objectDispatch }>
        <displayObjectState.Provider value={ objects_state }>
          <Display/>
          <Keyframe/>
        </displayObjectState.Provider>
      </displayObjectDispatch.Provider>
    </div>
    <div className="code-area area-block">

    </div>
  </div>;
}

export default App;