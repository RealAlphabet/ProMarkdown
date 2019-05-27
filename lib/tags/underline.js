import React from 'react';
import Tag from '../tag';

/**
* BASIC
* Underline
*/
export default class extends Tag {
    constructor() {
        super(/_([\s\S]*?)_/g, false);
    }

    toHTML() {
        return `<u>${this.content}</u>`;
    }

    toReact() {
        return <u>{this.content}</u>
    }
}