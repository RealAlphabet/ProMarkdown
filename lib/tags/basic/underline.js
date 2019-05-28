import React from 'react';
import Parser from '../../parser';
import Tag from '../../tag';

/**
* BASIC
* Underline
*/
export default class extends Tag {
    constructor() {
        super(/_{2}([\s\S]*?)_{2}/g, false);
    }

    toHTML() {
        return `<u>${Parser.toHTML(this.children)}</u>`;
    }

    toReact() {
        return <u>{Parser.toReact(this.children)}</u>
    }
}