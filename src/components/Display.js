import { useState, useEffect, useRef, useContext } from 'react';

// contexts
import { globalStateContext, globalDispatchContext } from '../global/Context';

// object class
import { DisplayObject, Ball } from '../class/DisplayObject';

// css
import "../css/components/Display.css";

function DisplayedObject({ value }) {
    return <div className={ "display-object " + `otype_${ value.type }` } id={ value.id } style={{
        ...value.getStyle(),
        top: value.getCurrentLocation().x,
        left: value.getCurrentLocation().y,
    }}></div>
}

function Display({ props }) {

    // get objects context
    const { display: objects } = useContext( globalStateContext );
    const dispatch = useContext( globalDispatchContext );

    useEffect(() => {
        console.log('---------------');
        objects.forEach(v => v.printInfo());
        console.log('---------------');
    }, [ objects ]);

    useEffect(() => {
        // default object registered check
        const default_exists = objects.find(v => v.isDefault === true);
        if ( default_exists ) return;

        // add default object
        const ballObject = new Ball(true, "기본객체", { width: "70px", height: "70px" });
        dispatch({ type: "display/add", info: ballObject });
    }, []);

    return <div className="display-area area-block">
        <nav className="menu">
            <span className="menu-text">추가</span>
            <span className="menu-text">삭제</span>
        </nav>
        <div className="stage">
            { objects.map(obj => <DisplayedObject key={ obj.getId() } value={ obj } />) }
        </div>
    </div>;
}

export default Display;