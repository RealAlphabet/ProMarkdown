import Text from './tags/basic/text';

/**
* PARSER
*/
export default class {
    constructor() {
        this.TAGS = [];
    }

    register(tag) {
        this.TAGS.push(tag);
    }

    unregister(tag) {
        this.TAGS.remove(tag);
    }

    parse(str) {
        var nodes = [];
        var tag;

        if (str.length < 1) {
            return [];
        }

        for (tag of this.TAGS) {
            tag = new tag.constructor();

            if (tag.parse(str)) {
                nodes.push(...this.parse(str.substring(0, tag.begin)));

                if (!tag.autoClose) {                           // Verify if the result is not auto closed,
                    tag.children = this.parse(tag.content);     // and parse his content too.
                }

                nodes.push(tag); // Store the current tag to the final result.

                nodes.push(...this.parse(str.substring(tag.end, str.length)));
                break;
            }
        }

        if (nodes.length) {
            return nodes;

        } else {
            return [new Text(str)];
        }
    }

    static toHTML(nodes) {
        var compiled = '';
        var node;

        for (node of nodes) compiled += node.toHTML();
        return compiled;
    }

    static toReact(nodes) {
        var compiled = []
        var node;

        for (node of nodes) compiled.push(node.toReact());
        return compiled;
    }
}