import * as actions from './actions';
import { ActionType } from "typesafe-actions";
import { GoogleAuthInfo } from '../../api/auth';
import { AsyncState } from '../../lib/reducerUtils';

export type GoogleAuthAction = ActionType<typeof actions>;
export type GoogleAuthState = {
    googleAuthInfo: AsyncState<GoogleAuthInfo, Error>;
}