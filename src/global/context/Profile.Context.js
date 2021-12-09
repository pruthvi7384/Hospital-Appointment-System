import React,{ createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "@firebase/firestore";
import { Container, Row, Spinner } from "react-bootstrap";

const ProfileContext = createContext();

export const ProfileProvider = ({children})=>{
    const [profile,setProfile] = useState();
    const [userProfile,setuserProfile] = useState();
    const [isloading,setIsloading] = useState(true);
    
    useEffect(()=>{
        let q;
        const authUnsub =  onAuthStateChanged(auth,(authobj)=>{
            if(authobj){
                const email = authobj.email;
                 q = query(collection(db, "Hospital"), where("email_id", "==", `${email}`));
                onSnapshot(q, (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setProfile({id:doc.id,hospital: doc.data()})
                        setIsloading(false)
                    });
                  });
                  setIsloading(false)
                  
                  const userquery = query(collection(db, "Users"), where("email", "==", `${email}`));
                  onSnapshot(userquery, (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setuserProfile({id:doc.id,user: doc.data()})
                        setIsloading(false)
                    });
                  });
                  setIsloading(false)
            }
            setIsloading(false)
            return ()=>{
                authUnsub ()
            }
            
        })
    },[])

    if(isloading){
        return(
            <Container style={{height:"100vh"}}className="d-flex justify-content-center align-items-center">
                <Row >
                        <Spinner animation="grow" variant="info" />
                </Row>
            </Container>
        )
    }

    return <ProfileContext.Provider value={{profile,isloading,setProfile,userProfile,setuserProfile}}>{children}</ProfileContext.Provider>
}

export const useProfile = ()=> useContext(ProfileContext);