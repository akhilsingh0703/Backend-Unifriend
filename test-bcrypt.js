const bcrypt = require('bcryptjs');
try {
    const hash = bcrypt.hashSync('test', 8);
    console.log('Bcryptjs works. Hash:', hash);
} catch (e) {
    console.error('Bcryptjs failed:', e);
}
