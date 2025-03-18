import { PaginatedResult } from "../../../core/models/PaginatedResult";
import { User } from "../models/user";

export interface UsersState{
    users: PaginatedResult<User>;
}
export const initialState : UsersState = {
    users : {
        data: [],
        page: 0,
        per_page: 6,
        total: 0,
        total_pages: 0,
    }
}

export interface SingleUserState{
    user: User;
}
export const initialUserState : SingleUserState = {
        user : {
            id: -1,
            email: '',
            first_name: '',
            last_name: '',
            avatar: '',
        }
}