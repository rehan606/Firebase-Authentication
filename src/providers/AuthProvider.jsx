import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    // set current Logged user 
    const [user, setUser] = useState(null)
    // Wait for loading data
    const [loadding, setLoadding] = useState(true)

    // Create User 
    const createUser = ( email, password) => {
        setLoadding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User 
    const signInUser = (email, password) => {
        setLoadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login With Google
    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // SignOut User
    const signOutUser = () => {
        setLoadding(true)
        return signOut(auth);
    }

    // Observer 

    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser);
            setUser(currentUser);
            setLoadding(false)
        })

        return () => {
            unSubscribe();
        }

    }, [])

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('currently Logged User', currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user Logged in')
    //         setUser(null)
    //     }
    // })


    const authInfo = {
        loadding,
        user,
        createUser,
        signInUser,
        signinWithGoogle,
        signOutUser,
        
    }
    
    return (
        <>
           <AuthContext.Provider value={authInfo}>
               {children}
           </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;