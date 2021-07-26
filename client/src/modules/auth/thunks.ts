import { googleAuth } from "../../api/auth";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { googleAuthAsync } from "./actions";

export const googleAuthThunk = createAsyncThunk(googleAuthAsync, googleAuth);