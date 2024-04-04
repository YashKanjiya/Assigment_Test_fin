import React from 'react'
//import axios from 'axios';

import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import AuthContect from '../Auth/AuthContent'
import Logindata from '../LoginForm/Login';
import Buttons from '../Button/Button';
import {request,setAuthHeader} from '../../Api/helper/axios_helper'
//import { setAuthHeader} from '../../Api/Data/getAuthToken';

// export const AppContent = () => {

//   //cosnt [count,setcount]=useState(0);
//   const [componentToShow, setComponentToShow] = useState("welcome");

//     const login = () => {
//         setComponentToShow("login");
//     };

//     const logout = () => {
//         setComponentToShow("welcome");
//         //setAuthHeader(null);
//     };

//     const onLogin = async (e, username, password) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:9292/login", {
//                 login: username,
//                 password: password
//             });
//             setAuthToken(response.data.token);
//             setComponentToShow("messages");
//         } catch (error) {
//             //setAuthHeader(null);
//             setComponentToShow("welcome");
//         }
//     };

//     const onRegister = async (event, firstName, lastName, username, password) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:9292/register", {
//                 firstName: firstName,
//                 lastName: lastName,
//                 login: username,
//                 password: password
//             });
//             setAuthToken(response.data.token);
//             setComponentToShow("messages");
//         } catch (error) {
//             //setAuthHeader(null);
//             setComponentToShow("welcome");
//         }
//     };

//     return (
//        <>
//             <Buttons
//                 login={login}
//                 logout={logout}
//             />

//             {componentToShow === "welcome" && <WelcomeComponent/>}
//             {componentToShow === "login" && <Logindata onLogin={onLogin} onRegister={onRegister} />}
//             {componentToShow === "messages" && <AuthContect />}
//         </>
//     );
// };

// export default AppContent;

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome to Goa"
        }
    };

    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

    onRegister = (event, firstName, lastName, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };

  render() {
    return (
      <>
        <Buttons
          login={this.login}
          logout={this.logout}
        />

        {this.state.componentToShow === "welcome" && <WelcomeComponent /> }
        {this.state.componentToShow === "login" && <Logindata onLogin={this.onLogin} onRegister={this.onRegister} />}
        {this.state.componentToShow === "messages" && <AuthContect />}

      </>
    );
  };
}
