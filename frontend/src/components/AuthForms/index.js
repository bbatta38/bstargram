import React from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";

export const LoginForm = props => (
    <div>
        <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="submit" value="Log in" />
        </form>
        <span>or</span>
        <span><LogoFacebook fontSize="20px" color="#385185" />Log in with Facebook</span>
        <span>Forgot password?</span>
    </div>
);

export const SignupForm = props => (
    <div>
        <h3>Sign up to see photos and videos from your friends.</h3>
        <button><LogoFacebook fontSize="20px" color="white" />log in with Facebook</button>
        <span>or</span>
        <form>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="username" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Sign up" />
        </form>
        <p>
            By signing up, you agree to our <span>Terms & Privacy policy</span>.
        </p>
    </div>
);
