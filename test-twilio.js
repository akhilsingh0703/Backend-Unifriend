const twilio = require('twilio');

try {
    console.log('Attempting to init twilio with undefined args...');
    const client = twilio(undefined, undefined);
    console.log('Twilio init success (unexpected if stricter)');
} catch (error) {
    console.error('Twilio init threw error:', error.message);
}
