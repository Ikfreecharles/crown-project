import "./signinSignup.styles.scss";
import Signin from "../../components/signin/Signin";
import SignUp from "../../components/sign-up/SignUp";

function SigninSignup() {
   return (
      <div className="signinSignup">
         <Signin />
         <SignUp />
      </div>
   );
}

export default SigninSignup;
