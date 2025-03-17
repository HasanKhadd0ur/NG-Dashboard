import { createAction, props } from "@ngrx/store";
import { PaginatedResult } from "../../../core/models/PaginatedResult";
import { User } from "../models/user";

// Users Actions 
export const LOAD_USERS = '[users page] load users';
export const LOAD_USERS_SUCCESS = '[users page] load users success';
export const SEARCH_USER_BYID =  '[Users] Search Users by ID';

export const CLEAR_SEARCH ='[User] Clear Search';

export const loadUsers = createAction(LOAD_USERS,  props<{ page: number }>());
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS,props<{users:PaginatedResult<User>}>());
export const searchUsersById = createAction(SEARCH_USER_BYID, props<{ userId: string }>());

export const clearSearch = createAction(CLEAR_SEARCH);

// User Actions 
export const LOAD_USER = '[user page] load user';
export const LOAD_USER_SUCCESS = '[user page] load user success';

export const loadSingleUser = createAction(LOAD_USER,  props<{ id: number }>());
export const loadSingleUserSuccess = createAction(LOAD_USER_SUCCESS,props<{user:User}>());