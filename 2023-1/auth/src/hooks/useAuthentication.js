import { authentication } from "../firebase/config";

import { getAuth, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateProfile,
        signOut } 
        from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup

    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()

    function checkIfIsCancelled (){
        if(cancelled){
            return
        }
    }
    //criar usuário
    const createUser = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null)
        try {
            const {user} = await
                createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )
            await updateProfile(user,{
                displayName: data.displayName
            })
            setLoading(false)
            return user
            
        } catch (error) {
            console.log(error.message)
            console.log (typeof error.message)

            let systemErrorMessage
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter ao menos 6 caracteres"
            } else if(error.message.includes('email-already')){
                systemErrorMessage = "O E-Mail já está cadastrado"
            }
            else{
                systemErrorMessage = "Ocorreu um erro inesperado, tente novamente mais tarde!"
            }
            setError(systemErrorMessage)
            setLoading(false)

        }
    }
//logout
    const logout = () =>{
        checkIfIsCancelled()
        signOut(auth)
       
    }
     

//login
    const login = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null)
        try {
            await signInWithEmailAndPassword (auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage
            if(error.message.includes("user-not-found")){
                systemErrorMessage = "Usuário não encontrado"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta"
            }
            else{
                systemErrorMessage="Ocorreu um erro inesperado. Por favor, tente mais tarde!"
            }

            setError(systemErrorMessage)
            setLoading(false)
            
        }
    }
    useEffect (()=>{
        return() => setCancelled(true)
      },[]) 

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
        
    }
}