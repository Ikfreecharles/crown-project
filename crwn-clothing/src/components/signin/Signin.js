import "./signin.styles.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

function Signin() {
   const [userData, setUserData] = useState({ email: "", password: "" });
   const handleSubmit = (e) => {
      e.preventDefault();
      setUserData({ email: "", password: "" });
   };
   const handleChange = (e) => {
      const { value, name } = e.target;
      setUserData({ ...userData, [name]: value });
   };
   return (
      <div className="sign-in">
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               type="email"
               name="email"
               id="email"
               label="Email"
               value={userData.email}
               onChange={handleChange}
               required
            />

            <FormInput
               type="password"
               name="password"
               id="password"
               label="Password"
               value={userData.password}
               onChange={handleChange}
               required
            />

            <div className="buttons">
               <Button type="submit">Sign In</Button>
               <Button onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
               </Button>
            </div>
         </form>
      </div>
   );
}

export default Signin;
