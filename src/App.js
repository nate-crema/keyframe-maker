import { useState, useEffect, useRef, useReducer } from 'react';

// components
import Keyframe from "./components/Keyframe";
import Display from "./components/Display";

// contexts
import { globalStateContext, globalDispatchContext, globalInitState } from './global/Context';
import { globalReducer } from './global/Reducer';

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
  const [ state, dispatch ] = useReducer( globalReducer, globalInitState );

  return <div className="main-wrap"
    style={{
      gridTemplateColumns: `${ uiarea_rate * 100 }% ${ codearea_rate * 100 }%`
    }}
  >
    <div className="ui-area" style={{
      gridTemplateRows: `${ display_rate * 100 }% ${ keyframe_rate * 100 }%`,
    }}>
      <globalDispatchContext.Provider value={ dispatch }>
        <globalStateContext.Provider value={ state }>
          <Display/>
          <Keyframe/>
        </globalStateContext.Provider>
      </globalDispatchContext.Provider>
    </div>
    <div className="code-area area-block">

    </div>
  </div>;
}

export default App;