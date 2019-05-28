import React from 'react';
import Parser from '../../parser';
import Tag from '../../tag';

/**
* BASIC
* Italic
*/
export default class extends Tag {
    constructor() {
        super(/\*([\s\S]*?)\*/g, false);
    }

    toHTML() {
        return `<i>${Parser.toHTML(this.children)}</i>`;
    }

    toReact() {
        return <i>{Parser.toReact(this.children)}</i>
    }
}