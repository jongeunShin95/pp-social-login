import { createReducer } from "typesafe-actions";
import { asyncState, createAsyncReducer, transformToArray } from "../../lib/reducerUtils";
import { googleAuthAsync } from "./actions";
import { GoogleAuthAction, GoogleAuthState } from "./types";

const initialState: GoogleAuthState = {
    googleAuthInfo: asyncState.initial()
}

const googleAuth = createReducer<GoogleAuthState, GoogleAuthAction>(initialState)
    .handleAction(transformToArray(googleAuthAsync),
        createAsyncReducer(googleAuthAsync, 'googleAuthInfo'));

export default googleAuth;