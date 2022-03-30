import * as auth from 'firebase/auth';
import { atom } from 'recoil';

export class CurrentUser {
    public userObject: auth.User

    constructor(userObject: auth.User) {
        this.userObject = userObject;
    }
}

export default atom<CurrentUser|undefined>({
    key: 'currentUser',
    default: undefined,
    dangerouslyAllowMutability: true, // The underlying user object must not be frozen
});