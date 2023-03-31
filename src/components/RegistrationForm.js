import styles from './RegistrationForm.module.css';
import userImage from '../images/Vector.png';
import FormCard from '../UI/FormCard';
import { useRef, useState } from 'react';

export default function RegistrationForm(props) {

    const [profilePic, setProfilePic] = useState(null);

    const uploadFile = useRef();
    const userName = useRef();
    const password = useRef();
    const email = useRef();
    const phoneNumber = useRef();

    const uploadFileHandler = () => uploadFile.current.click();

    const changeHandler = function(e) {
        setProfilePic(e.target.files[0]);
    }

    const submitHandler = function(e) {
        e.preventDefault();
        const user = {
            id: Math.round((Math.random() + 1) * 1000),
            userName: userName.current.value,
            email: email.current.value,
            password: password.current.value,
            phoneNumber: phoneNumber.current.value,
            profilePic
        }
        props.onReg();
        props.addUser(user);
    }

    return (
        <FormCard submit={submitHandler} buttonContent='Register Now'>
            <h1>Create New Profile</h1>
            <img src={userImage} />
            <input onChange={changeHandler} ref={uploadFile} className={styles.upload} type='file' accept='image/*' required/>
            <button onClick={uploadFileHandler} className={styles['btn-upload']} type='button'>{'\u2191'}</button>
            <div className={styles.info}>
                <label htmlFor='user-name'>Name</label>
                <input ref={userName} type='text' id='user-name' placeholder='Enter your name' required/>
                <label htmlFor='email'>Email</label>
                <input ref={email} type='email' id='email' placeholder='Enter your email' required/>
                <label htmlFor='password'>Password</label>
                <input ref={password} type='password' id='password' placeholder='Enter your password' required/>
                <label htmlFor='phone-number'>Phone number</label>
                <input ref={phoneNumber} type='number' id='phone-number' placeholder='Enter your phone number' required/>
            </div>
            <p>Already have an account? <a onClick={props.onReg} href='#'>Login here</a></p>
        </FormCard>
    )
}