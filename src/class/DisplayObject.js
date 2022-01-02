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
    constructor( id, type, size ) {
        this.id = id;
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
    getType() {
        return this.type;
    }
    getStyle() {
        return this.style;
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
    constructor( isDefault, size ) {
        super( createObjectId(), "Ball", size || { width: "50px", height: "50px" } );
        this.isDefault = isDefault || false;
    }
}