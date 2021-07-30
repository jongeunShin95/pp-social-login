import axios from 'axios';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const API = axios.create({ baseURL: '/users' });

export async function googleAuth(authInfo: GoogleLoginResponse | GoogleLoginResponseOffline) {
    const res = await API.post<GoogleAuthInfo>('/signin', authInfo);
    localStorage.setItem('auth', res.data.tokenId);
    localStorage.setItem('profile', JSON.stringify(res.data));
    return res.data;

    // const res = await axios.post<GoogleAuthInfo>('/users/signin', authInfo);
    // return res.data;
}


// Google Auth Return Type
export interface GoogleAuthInfo {
    ya:          string;
    Zb:          Zb;
    Os:          OS;
    googleId:    string;
    tokenObj:    Zb;
    tokenId:     string;
    accessToken: string;
    profileObj:  ProfileObj;
}

export interface OS {
    $R: string;
    Ne: string;
    ET: string;
    GR: string;
    KI: string;
    zt: string;
}

export interface Zb {
    token_type:      string;
    access_token:    string;
    scope:           string;
    login_hint:      string;
    expires_in:      number;
    id_token:        string;
    session_state:   SessionState;
    first_issued_at: number;
    expires_at:      number;
    idpId:           string;
}

export interface SessionState {
    extraQueryParams: ExtraQueryParams;
}

export interface ExtraQueryParams {
    authuser: string;
}

export interface ProfileObj {
    googleId:   string;
    imageUrl:   string;
    email:      string;
    name:       string;
    givenName:  string;
    familyName: string;
}