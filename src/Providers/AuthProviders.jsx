import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState('fahim');

	const auth = getAuth(app);

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const authInfo = { user, signUp, signIn };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProviders;
