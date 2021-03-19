import firebase from "firebase/app";
import "firebase/firestore";

//TODO: Later will be put in .env.template so others can not get into the database

const firebaseConfig = {
	apiKey: "AIzaSyA6dYhcwZuyUDzmyDj9-u64OWToJIXERj8",
	authDomain: "riley-breaks-the-internet.firebaseapp.com",
	projectId: "riley-breaks-the-internet",
	storageBucket: "riley-breaks-the-internet.appspot.com",
	messagingSenderId: "777220387780",
	appId: "1:777220387780:web:01ac9c6fbf4349b41cea91",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
