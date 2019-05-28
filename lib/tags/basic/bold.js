import React from 'react';
import Parser from '../../parser';
import Tag from '../../tag';

/**
* BASIC
* Bold
*/
export default class extends Tag {
    constructor() {
        super(/\*{2}(\*?[\s\S]*?\*?)\*{2}/g, false);
    }

    toHTML() {
        return `<b>${Parser.toHTML(this.children)}</b>`;
    }

    toReact() {
        return <b>{Parser.toReact(this.children)}</b>
    }
}