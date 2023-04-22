// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDXesL4JmJWbdVombpCmJY5LYsfvOA9s3E',
	authDomain: 'auth-firebase-context-be186.firebaseapp.com',
	projectId: 'auth-firebase-context-be186',
	storageBucket: 'auth-firebase-context-be186.appspot.com',
	messagingSenderId: '457426252554',
	appId: '1:457426252554:web:e39d99cecf386f5437c0f3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
