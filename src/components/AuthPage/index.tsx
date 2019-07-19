import React, {useState} from "react";
// import store from "../../store";
import './index.css'
import Preloader from "../Preloader";
import {getAuthToken} from '../../requests';
import MainPage from "../MainPage";
import {Link, Redirect} from "react-router-dom";

interface IAuthPageProps {

}

const AuthPage: React.FC<IAuthPageProps> = (props) => {

  const [loading, setLoading] = useState(false);
  const [authorizated, setAutorizated] =useState(false);


  const authRequest = async () => {
    await setLoading(true);
    const auth = await getAuthToken();
    console.log(auth);
    if(auth.status === 200) {
      setAutorizated(true);
    }
    await setLoading(false);
  };

  return (
    loading
      ?
        <Preloader />
      :
        authorizated
          ?
            <Redirect to='/main' />
            :
              <div onClick={() => authRequest()} className="auth-button">Авторизоваться</div>
  );
};

export default AuthPage;