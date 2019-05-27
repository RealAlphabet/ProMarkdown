import React from 'react';
import Tag from '../../../tag';

/**
* JAVASCRIPT
* Comment
*/
export default class extends Tag {
    constructor() {
        super(/\/\/.*|\/\*[\s\S]*\*\//g, true);
    }

    toHTML() {
        return `<span class="code-c">${this.content}</span>`;
    }

    toReact() {
        return <span className="code-c">{this.content}</span>;
    }
}