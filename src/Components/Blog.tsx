import * as auth from 'firebase/auth'
import userAtom, { CurrentUser } from '../Atoms/LocalUser'
import { useSetRecoilState } from 'recoil'
import { useState } from 'react';
import {User} from '@firebase/auth-types';

interface userLogin {
    email:string,
    password:string,
}


export default function Blog()
{
    const [verified, setVerified] = useState(false);
    //const [result, setResult] = useState<auth.ConfirmationResult|undefined>();
    const [result, setResult] = useState<any>()
    const [userInfo, setUserInfo] = useState<any>()
    let [showVerificationCode, setShowVerificationCode] = useState(false);
    let [verificationCode, setVerificationCode] = useState('');
    const setUser = useSetRecoilState(userAtom);
    const Login = () => {
    
        auth.getAuth().onAuthStateChanged((user) => {
            setUser(user ? new CurrentUser(user) : undefined);
        });
    }

    const submit = async () => {
        if (!verified)
        {
            let doTheThing:any = new auth.RecaptchaVerifier('recaptcha', {}, auth.getAuth())
            setResult(await auth.signInWithEmailAndPassword(auth.getAuth(), userInfo, doTheThing))
            setShowVerificationCode(true);
        } else {
            let credential = await result!.confirm(verificationCode);
            setUser(user => new CurrentUser(credential.user));
        }
    }
    

    return (
            <div>
                <h1>Login</h1>
                <input type="text" placeholder="email" onChange={event => setUserInfo(event.target.value)} /><br />
                {showVerificationCode && <input type="text" placeholder="Verification code" value={verificationCode} onChange={event => setVerificationCode(event.target.value)} />}
                {showVerificationCode && <br />}
                <button onClick={submit}>Log in</button>
                {!showVerificationCode && <div id="recaptcha"></div>}
            </div>
        );
}