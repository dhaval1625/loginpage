import styles from './Register.module.css';
import mainImage from '../images/background.png';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { useState } from 'react';

export default function Register(props) {

    const [reg, setReg] = useState(false);

    const regHandler = () => setReg(true);

    const noRegHandler = () => setReg(false);

    return(
        <div className={styles.container}>
            <img className={styles['main-image']} src={mainImage}/>
            {!reg && <RegistrationForm onReg={regHandler} addUser={props.addUser}/>}
            {reg && <LoginForm onLogin={props.onLogin} noReg={noRegHandler}/>}
        </div>
    )
}