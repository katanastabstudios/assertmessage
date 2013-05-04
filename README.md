# assertmessage

Improves the output for assert failure messages.  The normal assert message
includes either the message, or the actual/expected comparison.  This package
 will output both to give test runners more context for test failures.

Require this library as you would normally require assert and carry on.

```js

var assert = require('assertmessage');

describe('any test you want', function () {
    it('outputs a better message on failure', function () {
        assert.equal(false, true, 'Your informative message,
        ie why is false true?');
    });
});
// Should result in both the message, and the actual and expected
// values getting output

```