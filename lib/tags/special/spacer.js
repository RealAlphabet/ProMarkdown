import React from 'react';
import Tag from '../../tag';

/**
* SPECIAL
* Spacer
*/
export default class extends Tag {
    constructor() {
        super(/^-{3}$/gm, true);
    }

    toHTML() {
        return `<hr>`;
    }

    toReact() {
        return <hr />
    }
}