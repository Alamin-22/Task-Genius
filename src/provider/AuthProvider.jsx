"use client"
import PropTypes from 'prop-types';
import { useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import auth from '@/Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // create User
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Social Login Google

    const GoogleProvider = new GoogleAuthProvider();
    const GoogleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Update User Profile
    const UpdateProfile = (FullName) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: FullName,
        })
    }


    // MANAGE uSER
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    // send the value to the Context
    const value = {
        user, loading,
        CreateUser,
        logOut,
        Login,
        GoogleSingIn,
        UpdateProfile,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};
export default AuthProvider;