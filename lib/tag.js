/**
* TAG
*/
export default class {
    constructor(regex, close) {
        this.regex = regex;
        this.autoClose = close;
        this.children = [];
    }

    parse(str) {
        var match = this.regex.exec(str);

        if (match) {
            this.content = this.autoClose ? match[0] : match[1];
            this.begin = match.index;
            this.end = this.begin + match[0].length;

            this.afterMatch && this.afterMatch(match);
            return true;
        }
    }
}