import React from 'react';
import Tag from '../tag';

/**
* BASIC
* Link
*/
export default class extends Tag {
    constructor() {
        super(/(http|https):\/\/([^\s]+)/g, true);
    }

    toHTML() {
        return `<a href="${this.content}">${this.content}</a>`;
    }

    toReact() {
        return (
            <a href={this.content}>
                {this.content}
            </a>
        );
    }
}