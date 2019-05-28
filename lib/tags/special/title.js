import React from 'react';
import Tag from '../../tag';

/**
* SPECIAL
* Title
*/
export default class extends Tag {
    constructor() {
        super(/^#(.+)$/gm, true);
    }

    toHTML() {
        return `<h1 class="mark-title">${this.content}</h1>`;
    }

    toReact() {
        return <h1 className="mark-title">{this.content}</h1>
    }
}