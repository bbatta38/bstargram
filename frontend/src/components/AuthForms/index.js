import React from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import styles from "./styles.scss";

export const LoginForm = props => (
    <div className={styles.formComponent}>
        <form className={styles.form}>
            <input className={styles.textInput} type="text" placeholder="username" autoComplete="username" />
            <input className={styles.textInput} type="password" placeholder="password" autoComplete="current-password" />
            <input className={styles.button} type="submit" value="Log in" />
        </form>
        <span className={styles.divider}>or</span>
        <span className={styles.facebookLink}><LogoFacebook fontSize="20px" color="#385185" />Log in with Facebook</span>
        <span className={styles.forgotPass}>Forgot password?</span>
    </div>
);

export const SignupForm = props => (
    <div className={styles.formComponent}>
        <button className={styles.button}><LogoFacebook fontSize="20px" color="white" />log in with Facebook</button>
        <span className={styles.divider}>or</span>
        <form className={styles.form}>
            <input className={styles.textInput} type="email" placeholder="Email" />
            <input className={styles.textInput} type="text" placeholder="Name" />
            <input className={styles.textInput} type="username" placeholder="Username" autoComplete="username" />
            <input className={styles.textInput} type="password" placeholder="Password" autoComplete="password" />
            <input className={styles.button} type="submit" value="Sign up" />
        </form>
        <p className={styles.comment}>
            By signing up, you agree to our <span>Terms & Privacy policy</span>.
        </p>
    </div>
);
