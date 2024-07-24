import {auth,provider} from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import './auth.css';
import myImage from '../auth/logo.png';

export const Auth = () =>{
    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo();

    const signInWithGoogle = async () =>{
        const results= await signInWithPopup(auth,provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        };
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate("/dashboard");
    }

    if(isAuth){
        return <Navigate to="/dashboard"/>;
    }
    return (
        <><nav><div class="logo">
            <ul>
                <li><img src={myImage} padding-left={60} width={65} height={65}/></li>
                
            </ul>
            
        </div>
        </nav>
        <div className="login-page" >
                <br/> <br/>
                <button className="button-54" onClick={signInWithGoogle}>
                    {" "}
                    Sign In with Google
                </button>
            </div></>
    );
};