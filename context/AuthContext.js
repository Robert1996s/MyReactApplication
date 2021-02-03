import { useState, createContext } from 'react';
import React from 'react';
import { auth } from '../firebase';
import { useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider ({ children }) {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log('user: ', user);
            setUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    })


    const logIn = async (email, password) => {
        console.log('calling log in');
        try {
            console.log(email, password);
            await auth.signInWithEmailAndPassword(email, password);
            console.log('Log In'); //Väntar på await och körs efter, gå till nästa skärm etc
        } catch (error) {
            console.log('error: ', error);
        }
    }


    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.log('error: ', error);
        }
    }


    const signUp = async (email, password) => {
        console.log('calling signUp');
        auth.sign
    }
    

    return(
        <AuthContext.Provider value = {{ logIn, signOut, user, isLoading}}>
        {children}
        </AuthContext.Provider>
    );
}