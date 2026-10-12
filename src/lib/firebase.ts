import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "bowls-next-local.firebasestorage.app",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const storage = getStorage(app);

if (process.env.NODE_ENV === "development") {
  console.log("no storage app");
  connectStorageEmulator(storage, "127.0.0.1", 9199);
}
