import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { Platform } from "react-native";

// Analytics is web-only; importing it on native can break bundling.
let analytics;
if (typeof window !== "undefined") {
  const { getAnalytics } = require("firebase/analytics");
  analytics = getAnalytics;
}

const firebaseConfig = {
  apiKey: "AIzaSyD6OwcSFuVpscc6UCBbLZpapRi6bznhVfA",
  authDomain: "cookmate-ai-cfe4f.firebaseapp.com",
  projectId: "cookmate-ai-cfe4f",
  storageBucket: "cookmate-ai-cfe4f.firebasestorage.app",
  messagingSenderId: "954443165501",
  appId: "1:954443165501:web:277ea63c90276157435f54",
  measurementId: "G-M9GJLB2QT2",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = (() => {
  // On Fast Refresh/HMR, this module can be re-evaluated. Calling initializeAuth
  // twice throws auth/already-initialized, so we only do it on first load.
  if (Platform.OS === "web") return getAuth(app);

  if (getApps().length > 1) {
    // Shouldn't happen, but keep behavior safe.
    return getAuth(app);
  }

  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    // If already initialized (e.g. after HMR), return the existing instance.
    return getAuth(app);
  }
})();

// Export a no-op on native; useful if you later add web analytics.
export const getFirebaseAnalytics = () => {
  if (typeof window === "undefined" || !analytics) return undefined;
  return analytics(app);
};