import Parser from './parser';
import Tag from './tag';

/**
* CODE
* Syntax highlighter
*/
import Table from './tags/code/table';
import Line from './tags/code/line';

// JAVASCRIPT
import Comment from './tags/code/javascript/comment';
import String from './tags/code/javascript/string';
import Keyword from './tags/code/javascript/keyword';
import Function from './tags/code/javascript/function';
import Number from './tags/code/javascript/number';

/**
* SPECIAL
*/
import Spacer from './tags/special/spacer';
import Title from './tags/special/title';
import Link from './tags/special/link';

/**
* BASIC
*/
import Text from './tags/basic/text';
import Bold from './tags/basic/bold';
import Italic from './tags/basic/italic';
import Underline from './tags/basic/underline';
import Strike from './tags/basic/strike';

export default {
    Parser,
    Tag,

    Table,
    Line,

    Comment,
    String,
    Keyword,
    Function,
    Number,
    
    Spacer,
    Title,
    Link,

    Text,
    Bold,
    Italic,
    Underline,
    Strike
};