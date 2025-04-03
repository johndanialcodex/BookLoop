import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyDC71Ekt6UeAvSXcTeB1x7nJoKGNzL8lPQ",
	authDomain: "bookloop-63684.firebaseapp.com",
	projectId: "bookloop-63684",
	storageBucket: "bookloop-63684.firebasestorage.app",
	messagingSenderId: "819628770458",
	appId: "1:819628770458:web:1fa6ab9ea12de72763cb23"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



