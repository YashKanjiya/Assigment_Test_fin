import React,{useState} from 'react'
import axios from 'axios';

import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import AuthContect from '../Auth/AuthContent'
import Logindata from '../LoginForm/Login';
import Buttons from '../Button/Button';
import { setAuthToken } from '../../Api/Data/getAuthToken';

export const AppContent = () => {

  //cosnt [count,setcount]=useState(0);
  const [componentToShow, setComponentToShow] = useState("welcome");

    const login = () => {
        setComponentToShow("login");
    };

    const logout = () => {
        setComponentToShow("welcome");
        //setAuthHeader(null);
    };

    const onLogin = async (e, username, password) => {
        e.preventDefault();
        try {
            const response = await axios.post("/login", {
                login: username,
                password: password
            });
            setAuthToken(response.data.token);
            setComponentToShow("messages");
        } catch (error) {
            //setAuthHeader(null);
            setComponentToShow("welcome");
        }
    };

    const onRegister = async (event, firstName, lastName, username, password) => {
        event.preventDefault();
        try {
            const response = await axios.post("/register", {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            });
            setAuthToken(response.data.token);
            setComponentToShow("messages");
        } catch (error) {
            //setAuthHeader(null);
            setComponentToShow("welcome");
        }
    };

    return (
       <>
            <Buttons
                login={login}
                logout={logout}
            />

            {componentToShow === "welcome" && <WelcomeComponent/>}
            {componentToShow === "login" && <Logindata onLogin={onLogin} onRegister={onRegister} />}
            {componentToShow === "messages" && <AuthContect />}
        </>
    );
};

export default AppContent;
