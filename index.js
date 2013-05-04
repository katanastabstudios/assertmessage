var assert = require('assert');

module.exports = assert;

/**
 * Functions taken from node's assert
 */
function replacer(key, value) {
    if (value === undefined) {
        return '' + value;
    }
    if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
        return value.toString();
    }
    if (typeof value === 'function' || value instanceof RegExp) {
        return value.toString();
    }
    return value;
}

function truncate(s, n) {
    if (typeof s === 'string') {
        return s.length < n ? s : s.slice(0, n);
    } else {
        return s;
    }
}

assert.AssertionError.prototype.toString = function () {
    var output = [
        this.name + ':',
        truncate(JSON.stringify(this.actual, replacer), 128),
        this.operator,
        truncate(JSON.stringify(this.expected, replacer), 128)
    ].join(' ');

    if (this.message) {
        output = [this.message, output].join('\n');
    }

    return output;
};