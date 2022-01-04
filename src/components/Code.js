import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { useState, useEffect, useRef } from 'react';

// css
import "../css/components/Code.css";

function Line({ idx, active, changeLine, lang }) {
    
    const [ v, setV ] = useState([]);
    const [ tmp, setTmp ] = useState("");

    function getWordInfo(word, _type) {
        const colors = {
            html: [
                { types: "tag_name", color: "#569cd6", case: "" },
                { types: "attr", color: "#9cdcfe", case: "" },
                { types: "equal", color: "#d4d4d4", cases: [] },
                { types: "string", color: "#ce9178", cases: [] },
                { types: "remark", color: "#6a9955", cases: [] },
                { types: "special", color: "gray", cases: [] },
                { types: "space", color: "gray", cases: [] },
                { types: "tag_identifier", color: "gray", cases: [] },
            ],
            css: [
                { types: "property", color: "", cases: [ "accent-color","align-content","align-items","align-self","all","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","animation","appearance","aspect-ratio","backdrop-filter","backface-visibility","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position-x","background-position-y","background-position","background-repeat","background-size","background","block-size","border-block-color","border-block-end-color","border-block-end-style","border-block-end-width","border-block-end","border-block-start-color","border-block-start-style","border-block-start-width","border-block-start","border-block-width","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-bottom","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-image","border-inline-color","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-end","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-start","border-inline-style","border-inline-width","border-inline","border-left-color","border-left-style","border-left-width","border-left","border-radius","border-right-color","border-right-style","border-right-width","border-right","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-top","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip-path","clip","color-scheme","color","column-count","column-fill","column-gap (grid-column-gap)","column-rule-color","column-rule-style","column-rule-width","column-rule","column-span","column-width","columns","contain","content-visibility","content","counter-increment","counter-reset","counter-set","cursor","direction","display","empty-cells","filter","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","flex","float","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size-adjust","font-size","font-stretch","font-style","font-synthesis","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variant","font-variation-settings","font-weight","font","forced-color-adjust","gap (grid-gap)","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column-end","grid-column-start","grid-column","grid-row-end","grid-row-start","grid-row","grid-template-areas","grid-template-columns","grid-template-rows","grid-template","grid","hanging-punctuation","height","hyphens","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter-align","initial-letter","inline-size","inset-block-end","inset-block-start","inset-block","inset-inline-end","inset-inline-start","inset-inline","inset","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height-step","line-height","list-style-image","list-style-position","list-style-type","list-style","margin-block-end","margin-block-start","margin-block","margin-bottom","margin-inline-end","margin-inline-start","margin-inline","margin-left","margin-right","margin-top","margin-trim","margin","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-border","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","mask","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","object-fit","object-position","offset-distance","offset-position","offset-rotate","offset","opacity","order","orphans","outline-color","outline-offset","outline-style","outline-width","outline","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overflow","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","overscroll-behavior","padding-block-end","padding-block-start","padding-bottom","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","padding","page-break-after","page-break-before","page-break-inside","perspective-origin","perspective","place-content","place-items","place-self","pointer-events","position","quotes","resize","right","rotate","row-gap (grid-row-gap)","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin-bottom","scroll-margin-inline-start","scroll-margin-inline","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-inline","scroll-padding-left","scroll-padding","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y","scroll-snap-type","scrollbar-color","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","tab-size","table-layout","text-align-last","text-align","text-combine-upright","text-decoration-color","text-decoration-line","text-decoration-skip-ink","text-decoration-skip","text-decoration-style","text-decoration","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-emphasis","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-position","top","touch-action","transform-box","transform-origin","transform-style","transform","transition-delay","transition-duration","transition-property","transition-timing-function","transition","translate","unicode-bidi","user-select","vertical-align","visibility","white-space","widows","width","will-change","word-break","word-spacing","writing-mode","z-index" ] },
                { types: "pseudo-class", color: "", cases: [ ":active",":any-link",":autofill",":blank",":checked",":default",":defined",":dir()",":disabled",":empty",":enabled",":first-child",":first-of-type",":first",":focus-visible",":focus-within",":focus",":fullscreen",":has()",":host-context()",":host()",":host",":hover",":in-range",":indeterminate",":invalid",":is() (:matches()",":any())",":lang()",":last-child",":last-of-type",":left",":link",":not()",":nth-child()",":nth-last-child()",":nth-last-of-type()",":nth-of-type()",":only-child",":only-of-type",":optional",":out-of-range",":paused",":picture-in-picture",":placeholder-shown",":playing",":read-only",":read-write",":required",":right",":root",":scope",":target",":user-invalid (:-moz-ui-invalid)",":valid",":visited",":where()" ] },
                { types: "pseudo-element", color: "", cases: [ "::after (:after)","::backdrop","::before (:before)","::cue-region","::cue","::first-letter (:first-letter)","::first-line (:first-line)","::grammar-error","::marker","::part()","::placeholder","::selection","::slotted()","::spelling-error","::target-text" ] },
                { types: "at-rules", color: "", cases: [ "@charset","@color-profile","@counter-style","@document","@font-face","@font-feature-values","@import","@keyframes","@layer","@media","@namespace","@page","@property","@supports","@viewport" ] },
            ]
        }
        let type = "";
        if (_type) type = _type;
        else if (word[0] === "<" && word[1] !== "!") {
          getWordInfo("<", "tag_identifier");
          getWordInfo(word.replace("<", "").replace(">", ""), "tag_name");
          getWordInfo(">", "tag_identifier");
        } else if (word[0] === "<" && word[1] === "!") type = "remark";
        else if (word.includes("=")) {
            getWordInfo(word.split("=")[0], "attr");
            getWordInfo("=", "equal");
            getWordInfo(word.split("=")[1], "string");
            return;
        }

        if (type === "") return false;
        return {
            style: { 
                color: colors[lang]?.find(v => v.types === type)?.color || "gray"
            },
            val: word
        }
    }

    function _inputHandler(e) {
        console.log(e.keyCode, e);
        if (e.keyCode === 8) {
            // Backspace
            setTmp(p => p.slice(0, -1))
        } else if (e.keyCode === 13 || e.keyCode === 40) {
            // Enter or Down-Arrow
            setV(value => {
                changeLine(1, value);
                return value;
            })
        } else if (e.keyCode === 38) {
            // Up-Arrow
            setV(value => {
                changeLine(-1, value);
                return value;
            })
        } else if (e.keyCode === 32 || e.keyCode === 9) {
            // Space
            setTmp(inp => {
                const info = getWordInfo(inp);
                if (info === false) return "";
                setV(prev => [ ...prev, info, getWordInfo(" ", "space") ]);
                return "";
            })
        } else if ( ![ 17, 18, 91, 16, 93 ].includes(e.keyCode) ) setTmp(p => (p + e.key));
    }

    useEffect(() => {
        if (active) {
            document.addEventListener("keydown", _inputHandler);
            return () => {
                document.removeEventListener("keydown", _inputHandler);
            }
        }
    }, [ active ]);

    return <div className="line">
        <span className="line-number">{ idx }</span>
        <span className="line-content">{ v.map(_v => <span className="word" style={ _v.style }>{ _v.val }</span>) }</span>
    </div>
}

function Code({ input_active, lang }) {

    const [ lines, setLines ] = useState([]);
    const [ active_line, setActiveLine ] = useState(0);

    const addLine = () => {
        setLines(prev => [ ...prev, { v: "" } ]);
    }
    
    useEffect(() => {
        if (input_active) {
            if (lines.length === 0) addLine();
            setActiveLine(1);
        }
        else setActiveLine(0);
    }, [ input_active ]);

    return <div className="code">
        <div className="input-area">
            { lines.map((v, i) => <Line 
                idx={i+1}
                lang={ lang }
                active={ active_line === (i+1) }
                changeLine={(to, v) => {}}
            />) }
        </div>
        
    </div>;
}

export default Code;