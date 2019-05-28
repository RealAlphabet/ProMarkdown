import React from 'react';
import Parser from '../../parser';
import Tag from '../../tag';

/**
* BASIC
* Strike
*/
export default class extends Tag {
    constructor() {
        super(/~{2}([\s\S]*?)~{2}/g, false);
    }

    toHTML() {
        return `<s>${Parser.toHTML(this.children)}</s>`;
    }

    toReact() {
        return <s>{Parser.toReact(this.children)}</s>
    }
}