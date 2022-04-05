import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";



initializeFirebase()

const useFirebase=()=>{

    const [user, setUser]=useState({})
    const [isLoading, setIsLoading]=useState(true)
    const [authError, setAuthError]=useState('')

    const auth = getAuth();


    // email_password_registration
    const registerUser=(email,password)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          setAuthError('')
           
          })
          .catch((error) => {
           

            setAuthError(error.message)
           
          })
          
          .finally(()=>setIsLoading(false))
    }

    //  signin with email_pass

    const loginUser=(email,password)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          setAuthError('')
        })
        .catch((error) => {
          
            setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    // it observe user presence or not
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          })
          return ()=>unsubscribe
    },[])

    // signout
    const logout=()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false))
    }


    return{
        user,
        isLoading,
        registerUser,
        logout,
        loginUser,
        authError,
    }
}

export default useFirebase