import React from 'react';
import Tag from '../tag';

/**
* BASIC
* Italic
*/
export default class extends Tag {
    constructor() {
        super(/\*([\s\S]*?)\*/g, false);
    }

    toHTML() {
        return `<i>${this.content}</i>`;
    }

    toReact() {
        return <i>{this.content}</i>
    }
}