import { useState, useEffect, useRef } from 'react';

// components
import Keyframe from "./components/Keyframe";
import Display from "./components/Display";

// css
import "./css/global.css";
import "./css/components/App.css";

function App({ props }) {

  const [ display_rate, setDisplayRate ] = useState(0.6);
  const [ keyframe_rate, setKeyframeRate ] = useState(0.4);
  
  const [ uiarea_rate, setUIAreaRate ] = useState(0.5);
  const [ codearea_rate, setCodeAreaRate ] = useState(0.5);

  return <div className="main-wrap"
    style={{
      gridTemplateColumns: `${ uiarea_rate * 100 }% ${ codearea_rate * 100 }%`
    }}
  >
    <div className="ui-area" style={{
      gridTemplateRows: `${ display_rate * 100 }% ${ keyframe_rate * 100 }%`,
    }}>
      <Display/>
      <Keyframe/>
    </div>
    <div className="code-area">

    </div>
  </div>;
}

export default App;