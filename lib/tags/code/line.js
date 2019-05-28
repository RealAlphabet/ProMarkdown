import React from 'react';
import Tag from '../../tag';

/**
* CODE TABLE
* Line
*/
export default class extends Tag {
    constructor() {
        super(/.*/g, true);
    }

    toHTML() {
        return `<td>${Parser.toHTML(this.children)}</td>`;
    }

    toReact() {
        return <td>{Parser.toReact(this.children)}</td>;
    }

    afterMatch() {
        this.end++;
    }
}