const dotenv = require('dotenv');
try {
    console.log('Loading dotenv...');
    const result = dotenv.config({ path: 'nonexistent.env' });
    console.log('Dotenv result:', result);
} catch (e) {
    console.error('Dotenv crashed:', e.message);
}
