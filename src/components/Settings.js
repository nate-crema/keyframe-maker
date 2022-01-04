import { useState, useEffect, useRef, useContext } from 'react';

// contexts
import { globalStateContext, globalDispatchContext } from '../global/Context';

// components
import Code from './Code';

// css
import "../css/components/Settings.css";

function OptionBlock({ title, max_size, stateUpdate, children }) {
    
    const [ open, setOpen ] = useState(false);
    
    const _blockOpenHandler = () => {
        setOpen(true);
    }

    const _titleClickHandler = (e) => {
        e.stopPropagation();
        setOpen(p => !p);
    }

    useEffect(() => (stateUpdate && stateUpdate(open)), [ open ]);

    return <div className={"option-block" + (!open ? " closed" : "")} style={{ height: max_size }} onClick={_blockOpenHandler}>
        <div className="option-title" onClick={_titleClickHandler}>{ title }</div>
        { children } 
    </div>
}

function HTMLAttribute() {

    const [ input_active, setInputActive ] = useState(false);
    
    return <OptionBlock title="HTML Properties" max_size="300px" stateUpdate={ setInputActive } >
        <Code input_active={ input_active } lang="html"/>
    </OptionBlock>
}

function Settings({ }) {

    // get objects context
    const { display: objects, keyframe } = useContext( globalStateContext );
    const dispatch = useContext( globalDispatchContext );

    return <div className="code-area area-block">
        <nav className="menu">
            <div className="menu-text focus">속성</div>
            <div className="menu-text">코드</div>
        </nav>
        <div className="tabs-control">
            <HTMLAttribute/>
        </div>
    </div>;
}

export default Settings;