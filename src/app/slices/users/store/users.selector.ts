import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SingleUserState, UsersState } from "./users.state";

export const USER_STATE_NAME = 'users';
const getUsersState = createFeatureSelector<UsersState>(USER_STATE_NAME);

export const getUsers = createSelector(getUsersState , state=>{
    return state.users;
});


export const SINGLE_USER_STATE_NAME = 'user';
const getUserState = createFeatureSelector<SingleUserState>(SINGLE_USER_STATE_NAME);
export const getSingleUser = createSelector(getUserState , state=>{
    return state.user;
});

