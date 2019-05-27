import React from 'react';
import Tag from '../../../tag';

/**
* JAVASCRIPT
* String
*/
export default class extends Tag {
    constructor() {
        super(/[`"'][\s\S].+['"`]/g, true);
    }

    toHTML() {
        return `<span class="code-s">${this.content}</span>`;
    }

    toReact() {
        return <span className="code-s">{this.content}</span>;
    }
}