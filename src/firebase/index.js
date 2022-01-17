import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD6P_ve0V_XDioezEjsIL81RDfpvujzQuI",
	authDomain: "fitness-website-600b3.firebaseapp.com",
	projectId: "fitness-website-600b3",
	storageBucket: "fitness-website-600b3.appspot.com",
	messagingSenderId: "253134074226",
	appId: "1:253134074226:web:d52c5ad66ad80f5b35adeb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
