var assert = require('./index');

describe('Test message output', function () {
    it('Includes the message and actual/expected comparison', function () {
        try {
            assert.equal(true, false, 'True is definitely not false');
        } catch (err) {
            assert.equal(err.toString(), 'True is definitely not ' +
                'false\nAssertionError: true == false',
                'AssertionError.toString() was not formatted correctly');
        }
    });

    it('Does not include a message if one is not specified', function () {
        try {
            assert.equal(true, false);
        } catch (err) {
            assert.equal(err.toString(), 'AssertionError: true == false',
                'AssertionError.toString() was not formatted correctly');
        }
    });
});