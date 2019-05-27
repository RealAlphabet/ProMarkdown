import React from 'react';
import Tag from '../../../tag';

/**
* JAVASCRIPT
* Keyword
*/
export default class extends Tag {
    constructor() {
        super(/\b(import|from|export|class|extends|async|await|if|switch|case|for|while|of|in|break|continue|const|var|let|new|return)\b|\.\.\.|[+=<>&|!]/g, true);
    }

    toHTML() {
        return `<span class="code-k">${this.content}</span>`;
    }

    toReact() {
        return <span className="code-k">{this.content}</span>;
    }
}