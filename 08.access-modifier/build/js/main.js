"use strict";
function saySomething(word) {
    if (typeof word === 'string') {
        return word;
    }
    else if (Array.isArray(word)) {
        return word.join(' ');
    }
    throw new Error('enable to say something');
}
saySomething('hello');
saySomething(['hello', 'world']);
