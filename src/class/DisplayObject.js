import { getDefaultNormalizer } from "@testing-library/react";

// Initial Functions
const random_possibilities = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i" ];
const createObjectId = function() {
    let id = "";
    while( id.length < 10 )
        id += random_possibilities[(Math.random()*100) % random_possibilities.length];
    return id;
}

// Display Object

export class DisplayObject {
    constructor( id, type ) {
        this.id = id;
        this.type = type;
    }
    getType() {
        return this.type;
    }
}

// Display Sample Object

export class Ball extends DisplayObject {
    constructor() {
        super( createObjectId(), "Ball" );
    }
}