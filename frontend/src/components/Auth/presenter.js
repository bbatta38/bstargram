import React from "react";
import styles from './styles.scss';

const Auth = props => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require("images/phone.png")} alt="check out our app! It's going to be cool" />
        </div>
        <div className={styles.column}>
            <div className={styles.whiteBox}>
                {(() => {
                    switch (props.action) {
                        case "login":
                            return (
                                <p>
                                    Don't have an account?{" "}
                                    <span onClick={props.changeAction} className={styles.changeLink}>Sign up</span>
                                </p>
                            )
                        case "signup":
                            return (
                                <p>
                                    have an account?{" "}
                                    <span onClick={props.changeAction} className={styles.changeLink}>Log in</span>
                                </p>
                            )
                        default :
                            return null;
                    }
                })()}
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