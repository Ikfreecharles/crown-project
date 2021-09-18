import { initializeApp } from "@firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
   apiKey: "AIzaSyARwzKyd7T_J1k3Tl99a_flnDWkwdjEEWE",
   authDomain: "crwn-db-b3a8a.firebaseapp.com",
   projectId: "crwn-db-b3a8a",
   storageBucket: "crwn-db-b3a8a.appspot.com",
   messagingSenderId: "392074273242",
   appId: "1:392074273242:web:ded824b752c2b0dea7a0e3",
   measurementId: "G-SB8Z7RG21D",
};

initializeApp(config);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
   //check if there is a userAuth
   if (!userAuth) return;
   //try to find the user in the db.
   const userRef = doc(firestore, "users", `${userAuth.uid}`);
   const snapShot = await getDoc(userRef);
   console.log(snapShot.exists());
   //check if the user exist. if not add user to db
   if (!snapShot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
         await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }
   return userRef;
};

export const signInWithGoogle = () =>
   signInWithPopup(auth, provider)
      .then((result) => {
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         const user = result.user;
      })
      .catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.email;
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error);
      });
