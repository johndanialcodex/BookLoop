import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyDRkpcF9ptLgiRoWl2srBl_KC_7IYTazqg",
	authDomain: "shoutouts-2.firebaseapp.com",
	projectId: "shoutouts-2",
	storageBucket: "shoutouts-2.firebasestorage.app",
	messagingSenderId: "718744074127",
	appId: "1:718744074127:web:623f9fabb97f830f5f7dfa"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
