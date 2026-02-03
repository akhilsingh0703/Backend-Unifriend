const admin = require("firebase-admin");

if (!admin.apps.length) {
  try {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT
    );

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log('Firebase initialized successfully');
  } catch (error) {
    console.error('Firebase initialization failed:', error);
  }
}

const db = admin.apps.length ? admin.firestore() : { collection: () => ({ doc: () => ({ get: () => ({ exists: false }), set: () => { }, delete: () => { } }), where: () => ({ get: () => ({ empty: true, docs: [] }), orWhere: () => ({ get: () => ({ empty: true }) }) }), add: () => ({ id: 'mock-id' }) }) }; // Mock db to prevent crash on startup if init skipped

module.exports = { admin, db };
