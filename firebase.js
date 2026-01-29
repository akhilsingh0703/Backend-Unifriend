const admin = require("firebase-admin");

if (!admin.apps.length) {
  if (process.env.FIREBASE_PRIVATE_KEY) {
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
      console.log('Firebase initialized successfully');
    } catch (error) {
      console.error('Firebase initialization failed:', error);
    }
  } else {
    console.warn('Warning: FIREBASE_PRIVATE_KEY not found in .env. Firebase features will not work.');
  }
}

const db = admin.apps.length ? admin.firestore() : { collection: () => ({ doc: () => ({ get: () => ({ exists: false }), set: () => { }, delete: () => { } }), where: () => ({ get: () => ({ empty: true, docs: [] }), orWhere: () => ({ get: () => ({ empty: true }) }) }), add: () => ({ id: 'mock-id' }) }) }; // Mock db to prevent crash on startup if init skipped

module.exports = { admin, db };
