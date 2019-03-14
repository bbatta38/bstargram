import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <FacebookLogin
      appId="589017464967692"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-square"
    />
    <span className={formStyles.divider}>or</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        className={formStyles.textInput}
        type="email"
        placeholder={context.t("Email")}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        className={formStyles.textInput}
        type="text"
        placeholder={context.t("Name")}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        className={formStyles.textInput}
        type="username"
        placeholder={context.t("Username")}
        autoComplete="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        className={formStyles.textInput}
        type="password"
        placeholder={context.t("Password")}
        autoComplete="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        className={formStyles.button}
        type="submit"
        value={context.t("Sign up")}
      />
    </form>
    <p className={formStyles.comment}>
      By signing up, you agree to our <span>Terms & Privacy policy</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
