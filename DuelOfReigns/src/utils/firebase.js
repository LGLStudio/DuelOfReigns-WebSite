// Initializes and configures Firebase, providing an asynchronous function getAppInstance to retrieve the Firebase app instance.
import {initializeApp} from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || process.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID || process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
console.log(firebaseConfig)
// Initialiser Firebase
const app = initializeApp(firebaseConfig);

/**
 * Returns the Firebase instance asynchronously.
 *
 * @return {Promise<App>} A promise resolving to the app instance.
 */
async function getAppInstance() {
    return app;
}

export {getAppInstance}