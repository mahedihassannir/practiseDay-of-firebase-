import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import app from '../Contex/Firebase.config'


let auth = getAuth(app)


export let contex = createContext(null)


const Contex = ({ children }) => {



    let handleRegister = (email, password,) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    let handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    let user = {

        handleRegister,
        handleLogin
    }

    return <contex.Provider value={user}>

        {children}

    </contex.Provider>
};

export default Contex;