import React from 'react';
import Tag from '../tag';

/**
* BASIC
* Bold
*/
export default class extends Tag {
    constructor() {
        super(/\*\*([\s\S]*?)\*\*/g, false);
    }

    toHTML() {
        return `<b>${this.content}</b>`;
    }

    toReact() {
        return React.createElement("b", null, this.content);
    }
}