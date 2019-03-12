import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from "components/AuthForms";

const Auth = props => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/phone.png")} alt="check out our app! It's going to be cool" />
        </div>
        <div className={styles.column}>
            <div className={`${styles.whiteBox} ${styles.formBox}`}>
            {props.action === "login" && (<LoginForm />)}
            {props.action === "signup" && (<SignupForm />)}
            </div>
            <div className={styles.whiteBox}>
                {props.action === "login" && (
                    <p>
                        Don't have an account?{" "}
                        <span onClick={props.changeAction} className={styles.changeLink}>Sign up</span>
                    </p>
                )}
                {props.action === "signup" && (
                    <p>
                        have an account?{" "}
                        <span onClick={props.changeAction} className={styles.changeLink}>Log in</span>
                    </p>
                )}
            </div>
            <div className={styles.appBox}>
                <span>Get the app.</span>
                <div className={styles.appStore}>
                    <img src={require("images/app_store.png")} alt="Get this app via Apple appstore" />
                    <img src={require("images/google_play.png")} alt="Get this app via Google play" />
                </div>
            </div>
        </div>
    </main>
)

export default Auth;