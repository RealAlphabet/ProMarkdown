import Parser, { Link, Bold, Italic } from 'promarkdown';

/**
* PARSER
* Initialization
*/
const parser = new Parser();

parser.register(new Link());
parser.register(new Bold());
parser.register(new Italic());

/**
 * PARSER
 * Parse text
 */
const str = `
    Hello my **friends**, how are you ? *(I'm fine)*
    Follow https://github.com for more npm packages !
`;

return parser.toHTML(parser.parse(str));