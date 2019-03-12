import React from "react";
import PropTypes from "prop-types";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import formStyles from "shared/formStyles.scss";

const LoginForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <form className={formStyles.form}>
            <input className={formStyles.textInput} type="text" placeholder={context.t("username")} autoComplete="username" />
            <input className={formStyles.textInput} type="password" placeholder={context.t("password")} autoComplete="current-password" />
            <input className={formStyles.button} type="submit" value={context.t("Log in")} />
        </form>
        <span className={formStyles.divider}>or</span>
        <span className={formStyles.facebookLink}><LogoFacebook fontSize="20px" color="#385185" />Log in with Facebook</span>
        <span className={formStyles.forgotPass}>Forgot password?</span>
    </div>
);

LoginForm.contextTypes = {
    t:PropTypes.func.isRequired
}

export default LoginForm;