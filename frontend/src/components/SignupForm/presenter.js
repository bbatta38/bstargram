import React from "react";
import PropTypes from "prop-types";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import formStyles from "shared/formStyles.scss";

const SignupForm = props => (
    <div className={formStyles.formComponent}>
        <button className={formStyles.button}><LogoFacebook fontSize="20px" color="white" />log in with Facebook</button>
        <span className={formStyles.divider}>or</span>
        <form className={formStyles.form}>
            <input className={formStyles.textInput} type="email" placeholder="Email" />
            <input className={formStyles.textInput} type="text" placeholder="Name" />
            <input className={formStyles.textInput} type="username" placeholder="Username" autoComplete="username" />
            <input className={formStyles.textInput} type="password" placeholder="Password" autoComplete="password" />
            <input className={formStyles.button} type="submit" value="Sign up" />
        </form>
        <p className={formStyles.comment}>
            By signing up, you agree to our <span>Terms & Privacy policy</span>.
        </p>
    </div>
);

SignupForm.contextTypes = {
    t:PropTypes.func.isRequired
}

export default SignupForm;