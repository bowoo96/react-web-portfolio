import { initializeApp, getApp, getApps } from "firebase/app"
import { getStorage } from "firebase/storage"

// ポートフォリオ用の placeholder
const firebaseConfig = {
    apiKey: "portfolio",
    authDomain: "portfolio.com",
    projectId: "portfolio-id",
    storageBucket: "portfolio.com",
    messagingSenderId: "1234",
    appId: "1234",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const storage = getStorage()
export default app