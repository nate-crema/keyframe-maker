import { useState, useEffect, useRef, useContext } from 'react';

// contexts
import { globalStateContext, globalDispatchContext } from '../global/Context';

// css
import "../css/components/Keyframe.css";

function ObjectOnKeyframe({ obj }) {
    return <div className="object-keyframe">
        <div className="info-area">
            <div className="object-title">
                <p className="object-title-text">{ obj.getName() }</p>
                <p className="object-info-text">{ obj.getSubInfoText() }</p>
            </div>
        </div>
        <div className="timeline-area">
            
        </div>
    </div>
}

function Keyframe({ props }) {

    // get objects context
    const { display: objects, keyframe } = useContext( globalStateContext );
    const dispatch = useContext( globalDispatchContext );

    return <div className="keyframe-area area-block">
        <nav className="menu">
            <span className="menu-text focus">오브젝트 타임라인</span>
        </nav>
        <div className="keyframe-control">
            <div className="times-keyframe">
                <div className="timeline"></div>
                <div className="timearea-splition-cover">
                    { Array.apply(null, Array(Math.floor(keyframe.total_time / keyframe.time_splition))).map((v, i) => <>
                        <span className="timearea-splition" key={i} style={{
                            marginRight: keyframe.interval ? `${keyframe.interval}px` : `calc(${(100 / Math.floor(keyframe.total_time / keyframe.time_splition))}% - 1px)`
                        }}>
                            <span className='text'>{ i }초 ({ i * (100 / Math.floor(keyframe.total_time / keyframe.time_splition)) }%)</span>
                        </span>
                    </>) }
                </div>
            </div>
            <div className="objects-keyframe">
                <div className="objects-info">
                    <span className="info-text">타임라인: { keyframe.total_time }초</span>
                </div>
                { objects.map(obj => <ObjectOnKeyframe obj={obj}/>) }
            </div>
        </div>
    </div>;
}

export default Keyframe;