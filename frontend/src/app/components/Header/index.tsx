import React from 'react';
import style from './header.css';
import LogOut from '../../../assets/images/logout.png';
import { useHistory } from 'react-router';
export const MainHeader = (): JSX.Element => {
  const history=useHistory()
  const authJson = localStorage.getItem('@auth');
  const authdata = authJson !== null ? JSON.parse(authJson) : '{}';
  const logOutFunc = () => {
    localStorage.removeItem('@auth');
    history.push("/")
  };
  return (
    <header>
      <a href="/">
      </a>
      <div className={style.userBox}>
        {authdata?.data?.name}
        <p className={style.logOut} onClick={logOutFunc}>
          <img src={LogOut} alt="Logout" />
        </p>
      </div>
    </header>
  );
};
