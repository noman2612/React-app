import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../../fire.base/firebase-auth';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const signUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LogUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        // const unSibrese 
    },[])
    const authInfo = {
        user,
        signUser,
        LogUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;