import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile, getIdToken } from "firebase/auth";



initializeFirebase()

const useFirebase=()=>{

    const [user, setUser]=useState({})
    const [isLoading, setIsLoading]=useState(true)
    const [authError, setAuthError]=useState('')
    const [admin, setAdmin]=useState(false)
    const [token, setTokoen]=useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // email_password_registration
    const registerUser=(email,password,name,history)=>{
      setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          setAuthError('')
          const newUser={email, displayName:name}
          setUser(newUser)

          // save user to database
          saveUser(email,name,'POST')


          // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName:name
          }).then(() => {
           
          }).catch((error) => {
           
          });
          history.replace('/')
           
          })
          .catch((error) => {
           

            setAuthError(error.message)
           
          })
          
          .finally(()=>setIsLoading(false))
    }

    //  signin with email_pass

    const loginUser=(email,password, location, history)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const  destination= location?.state?.from || '/'
          history.replace(destination)

          setAuthError('')
        })
        .catch((error) => {
          
            setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    const signInWithGoogle=(location, history)=>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          setAuthError('')
          const  destination= location?.state?.from || '/'
          history.replace(destination)

          // save user to database
          saveUser(user.email, user.displayName, 'PUT')

        }).catch((error) => {
          setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

    // it observe user presence or not
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)

              // JWT token work
              getIdToken(user)
              .then(getIdToken=>{
                setTokoen(getIdToken)
    
              })
            } else {
              setUser({})
            }
            setIsLoading(false)
          })
          return ()=>unsubscribe
    },[])


    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])



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

    const saveUser=(email,displayName,method)=>{
        const user={email,displayName}
        fetch('http://localhost:5000/users',{
          method:method,
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(user)
        })
    }


    return{
        user,
        admin,
        isLoading,
        token,
        registerUser,
        logout,
        loginUser,
        authError,
        signInWithGoogle,
    }
}

export default useFirebase