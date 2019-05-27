import React from 'react';
import Tag from '../../../tag';

/**
* JAVASCRIPT
* Number
*/
export default class extends Tag {
    constructor() {
        super(/[0-9]+/g, true);
    }

    toHTML() {
        return `<span class="code-c1">${this.content}</span>`;
    }

    toReact() {
        return <span className="code-c1">{this.content}</span>;
    }
}