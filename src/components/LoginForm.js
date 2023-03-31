import { useRef, useState } from 'react';
import FormCard from '../UI/FormCard';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm(props) {

    const email = useRef();
    const password = useRef();
    let noUser = null;
    const [notFound, setNotFound] = useState(false);
    const [passError, setPassError] = useState(false);

    const loginHandler = function(e) {
        setNotFound(false);
        setPassError(false);
        e.preventDefault();

        const loginValues = {
            email: email.current.value,
            password: password.current.value
        }
        noUser = props.onLogin(loginValues);
        if(noUser.emailIncorrect) setNotFound(true);
        if(noUser.passwordIncorrect) setPassError(true);
    }

    return (
        <FormCard submit={loginHandler} buttonContent='Login Now'>
            <div>
                <h4>Welcome back</h4>
                <h1>Login to your Account</h1>
            </div>
            <div className={styles.info}>
                <label htmlFor='email'>Email</label>
                <input ref={email} type='email' id='email' placeholder='Enter your email' required />
                <label htmlFor='password'>Password</label>
                <input ref={password} type='password' id='password' placeholder='Enter your password' required />
            </div>
            <p>Don't have an account? <a onClick={props.noReg} href='#'>Register here</a></p>
            {notFound && <p>You are not registered OR there is typo in email you provided.</p>}
            {passError && <p>Password is incorrect. Try again!</p>}
        </FormCard>
    )
}