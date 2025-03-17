import { createReducer, on } from "@ngrx/store"
import { initialState, initialUserState } from "./users.state"
import { clearSearch, loadSingleUserSuccess, loadUsersSuccess, searchUsersById } from "./users.actions"

const _userReducer = createReducer(initialState,
    on(loadUsersSuccess,(state,action) =>{
      return {
        ...state,
        users:action.users
      }
    }),
    on(searchUsersById, (state, { userId }) => {
      const filteredUsers = state.users.data.filter(user => user.id === +userId);
      
      return {
        ...state,
        users: {
          ...state.users,
          data: filteredUsers.length ? filteredUsers : [], // Show empty result if not found
          total: filteredUsers.length ,
          total_pages: 1,
          page: 1,
        },

      };
    }
  ),

  on(clearSearch, (state) => ({
    ...state,
    users: {
      ...initialState.users,
      data: state.users.data, 
      total: state.users.data.length, 
      total_pages: state.users.total_pages,
      page: state.users.page,
    }
  }))
)
export function userReducer(state:any,action:any){
    return _userReducer(state,action)
}

const _singleUserserReducer = createReducer(initialUserState,
  on(loadSingleUserSuccess,(state,action) =>{
    return {
      ...state,
      user:action.user
    }
  })
)
export function singleUserReducer(state:any,action:any){
  return _singleUserserReducer(state,action)
}