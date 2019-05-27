import React from 'react';
import Parser from '../../parser';
import Tag from '../../tag';

/**
* CODE TABLE
* Table
*/
export default class extends Tag {
    constructor() {
        super(/```([\s\S]*?)```/g, true);

        const lineParser = new Parser();
        const codeParser = new Parser();

        lineParser.register(new Line());

        codeParser.register(new Comment());
        codeParser.register(new String());
        codeParser.register(new Keyword());
        codeParser.register(new Function());
        codeParser.register(new Number());

        this.lineParser = lineParser;
        this.codeParser = codeParser;
    }

    toHTML() {
        return `<div class="code">${Parser.toHTML(this.children)}</div>`;
    }

    toReact() {
        return (
            <table className="code">
                {Parser.toReact(this.children).map((line, index) =>
                    <tr>
                        <td className="code-num">{index}</td>
                        {line}
                    </tr>
                )}
            </table>
        );
    }

    afterMatch() {
        const content = this.content;
        const lines = this.lineParser.parse(content.slice(3, content.length - 3));
        lines.shift();

        var line;
        for (line of lines)
            line.children.push(...this.codeParser.parse(line.content));

        this.children = lines;
    }
}