import React from 'react';
import Tag from '../../../tag';

/**
* JAVASCRIPT
* Function
*/
export default class extends Tag {
    constructor() {
        super(/\w+(?=\()/g, true);
    }

    toHTML() {
        return `<span class="code-f">${this.content}</span>`;
    }

    toReact() {
        return <span className="code-f">{this.content}</span>;
    }
}