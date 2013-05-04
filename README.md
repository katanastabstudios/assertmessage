# assertmessage

Improves the output for assert failure messages.

Require this library as you would normally require assert and carry on.

```js

var assert = require('assertmessage');

describe('any test you want', function () {
    assert.equal(false, true, 'Your informative message,
    ie why is false true?');
});
// Should result in both the message, and the actual and expected
// values getting output

```