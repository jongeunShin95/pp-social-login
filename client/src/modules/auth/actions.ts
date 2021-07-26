import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { GoogleAuthInfo } from "../../api/auth";

export const GOOGLE_AUTH = 'auth/GOOGLE_AUTH';
export const GOOGLE_AUTH_SUCCESS = 'auth/GOOGLE_AUTH_SUCCESS';
export const GOOGLE_AUTH_ERROR = 'auth/GOOGLE_AUTH_ERROR';

export const googleAuthAsync = createAsyncAction(
    GOOGLE_AUTH,
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_ERROR
)<any, GoogleAuthInfo, AxiosError>();