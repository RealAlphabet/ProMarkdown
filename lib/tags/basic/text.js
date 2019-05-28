import Tag from '../../tag';

/**
* BASIC
* Text
*/
export default class extends Tag {
    constructor(content) {
        super(/.+\n?/g, true);

        if (content) {
            this.content = content;
        }
    }

    toHTML() {
        return this.content;
    }

    toReact() {
        return this.content;
    }
}