
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { SharedReducer } from "./shared/shared.reducer";
import { singleUserReducer } from "../../slices/users/store/users.reducer";
import { SINGLE_USER_STATE_NAME } from "../../slices/users/store/users.selector";
import { SingleUserState } from "../../slices/users/store/users.state";

export interface AppState{
    [SHARED_STATE_NAME]: SharedState;
    [SINGLE_USER_STATE_NAME]: SingleUserState;
}
export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [SINGLE_USER_STATE_NAME]: singleUserReducer
}