import "./button.styles.scss";

function Button({ children, isGoogleSignIn, inverted, ...otherProps }) {
   return (
      <button
         className={`${inverted ? "inverted" : ""} ${
            isGoogleSignIn ? "google-sign-in" : ""
         } custom-button`}
         {...otherProps}
      >
         {children}
      </button>
   );
}

export default Button;
