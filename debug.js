const fs = require('fs');
try {
    require('./index.js');
} catch (e) {
    fs.writeFileSync('debug_error.log', e.stack);
}
