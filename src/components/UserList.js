import styles from './UserList.module.css';
import userImage1 from '../images/user1.jpg';
import userImage2 from '../images/user2.jpg';
import userImage3 from '../images/user3.jpg';
import userImage4 from '../images/user4.jpg';
import { useState } from 'react';


export default function UserList(props) {

    function ShowUserList() {

        return (
            <>
                <h1>Users List</h1>
                {props.users.map(user => <div key={user.id} className={styles.user}>
                    <img className={styles.dp} src={userImages[Math.trunc((Math.random() * 3) + 1)]} />
                    <h3>{user.userName}</h3>
                    <p>{user.email}</p>
                    <p>{user.phoneNumber}</p>
                </div>)}
            </>
        )
    }

    function ShowProfile() {
        return (
            <div className={styles['profile-container']}>
                <h1>Your Profile</h1>
                <img className={styles.dplarge} src={userImages[Math.trunc((Math.random() * 3) + 1)]} />
                <h3>Name: {props.user.userName}</h3>
                <p>Email: {props.user.email}</p>
                <p>Phone Number: {props.user.phoneNumber}</p>
            </div>
        )
    }

    const [profileView, setProfileView] = useState(false);
    const userImages = [userImage1, userImage2, userImage3, userImage4];

    const profileViewHandler = () => setProfileView(prev => !prev);

    return (
        <section className={styles.container} >
            <button onClick={profileViewHandler} className={styles['btn-switch-view']}>{profileView ? 'Users List' : 'Your Profile'}</button>
            {profileView ? <ShowProfile /> : <ShowUserList />}
        </section>
    )
}