import firebase from "firebase/app";
import "firebase/firestore";

//TODO: Later will be put in .env.template so others can not get into the database

const firebaseConfig = {
	apiKey: "AIzaSyCPxIazGMVL-qIEmjpuABd6OV1IGwuJ_Ic",
	authDomain: "app-design-demo.firebaseapp.com",
	projectId: "app-design-demo",
	storageBucket: "app-design-demo.appspot.com",
	messagingSenderId: "645185981200",
	appId: "1:645185981200:web:026b5216d7e07cb70c3395",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
