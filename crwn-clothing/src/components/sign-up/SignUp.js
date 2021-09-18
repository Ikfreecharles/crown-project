import "./signUp.styles.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
   const [userData, setUserData] = useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const handleSubmit = async (e) => {
      e.preventDefault();
      const { displayName, email, password, confirmPassword } = userData;
      if (password !== confirmPassword) {
         alert("Passwords don't match");
         return;
      } else {
         try {
            const auth = getAuth();
            const { user } = createUserWithEmailAndPassword(
               auth,
               email,
               password
            );
            // .then((userData) => {
            //    // Signed in
            //    const user = userData.user;
            //    // ...
            // })
            // .catch((error) => {
            //    const errorCode = error.code;
            //    const errorMessage = error.message;
            //    // ..
            // });

            await createUserProfileDocument(user, { displayName });
            setUserData({
               displayName: "",
               email: "",
               password: "",
               confirmPassword: "",
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
   };
   return (
      <div className="sign-up">
         <h2 className="title">I do not have an account</h2>
         <span>Sign up with your email and password</span>
         <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               type="text"
               name="displayName"
               value={userData.displayName}
               onChange={handleChange}
               label="Display Name"
               required
            />
            <FormInput
               type="email"
               name="email"
               value={userData.email}
               onChange={handleChange}
               label="Email"
               required
            />
            <FormInput
               type="password"
               name="password"
               value={userData.password}
               onChange={handleChange}
               label="Password"
               required
            />
            <FormInput
               type="password"
               name="confirmPassword"
               value={userData.confirmPassword}
               onChange={handleChange}
               label="Confirm Password"
               required
            />
            <Button tyoe="submit">Sign up</Button>
         </form>
      </div>
   );
}

export default SignUp;
