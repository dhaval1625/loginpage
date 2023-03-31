import { useEffect, useState } from 'react';
import './App.css';
import Register from './components/Register';
import UserList from './components/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeUser, setActiveUser] = useState(null);

  const addUserHandler = function (user) {
    setUsersList(prev => [...prev, user]);
  };

  useEffect(() => {
    const fetchUsers = async function () {
      const res = await fetch('https://react-demo-6c423-default-rtdb.asia-southeast1.firebasedatabase.app/users.json');
      const data = await res.json();
      setUsersList(data || []);
    }

    fetchUsers();
  }, [])

  useEffect(() => {
    async function sendUserData() {
      const res = await fetch('https://react-demo-6c423-default-rtdb.asia-southeast1.firebasedatabase.app/users.json', {
      method: 'PUT',
      body: JSON.stringify(usersList),
    });

    if (!res.ok) throw new Error('Something went wrong!');
    };

    sendUserData();
  },[usersList])

  const loginHandler = function (input) {
    const curUser = usersList.find(user => user.email === input.email);

    if (!curUser) {
      return {
        emailIncorrect: true,
        passwordIncorrect: false,
      };
    }

    const checkPassword = curUser.password === input.password;

    if (!checkPassword) {
      return {
        emailIncorrect: false,
        passwordIncorrect: true
      }
    }

    setLoggedIn(true);
    setActiveUser(curUser);
    return {
      emailIncorrect: false,
      passwordIncorrect: false
    }
  }

  return (
    <main>
      {!loggedIn && <Register onLogin={loginHandler} addUser={addUserHandler} />}
      {loggedIn && <UserList user={activeUser} users={usersList}/>}
    </main>
  );
}

export default App;
