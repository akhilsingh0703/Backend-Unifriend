try {
    const { body } = require('express-validator');
    console.log('express-validator loaded successfully');
} catch (e) {
    console.error('express-validator failed:', e.message);
}
