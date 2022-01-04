import { getDefaultNormalizer } from "@testing-library/react";

// Initial Functions
const random_possibilities = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i" ];
const createObjectId = function() {
    let id = "";
    while( id.length < 10 )
        id += random_possibilities[(Math.floor(Math.random()*100)) % (random_possibilities.length-1)];
    return id;
}

// Display Object

export class DisplayObject {
    constructor( id, name, type, size ) {
        this.id = id;
        this.name = name || "이름없는 객체";
        this.type = type;
        this.isDefault = false;
        this.created = new Date();
        this.style = size;
        this.location = {
            x: "50%",
            y: "50%"
        }
    }
    printInfo() {
        const { id, type, isDefault, created } = this;
        return console.log(`Display Object: ${ id } - (${ type } | ${ !isDefault ? "Non-" : "" }Default created object | ${ created })`);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getStyle() {
        return this.style;
    }
    getSubInfoText() {
        return `${ this.type }, id: ${ this.id }`;
    }
    getCurrentLocation() {
        return this.location;
    }
    isDefaultCreated() {
        return this.isDefault;
    }
}

// Display Sample Object

export class Ball extends DisplayObject {
    constructor( isDefault, name, size ) {
        super( createObjectId(), name, "Ball", size || { width: "50px", height: "50px" } );
        this.isDefault = isDefault || false;
    }
}