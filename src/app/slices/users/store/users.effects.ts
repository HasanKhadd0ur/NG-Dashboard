import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadSingleUser, loadSingleUserSuccess, loadUsers, loadUsersSuccess } from "./users.actions";
import { map, mergeMap, Observable, withLatestFrom ,of } from "rxjs";
import { Store } from "@ngrx/store";import { AppState } from "../../../core/store/app.state";
import { setLoadingSpinner } from "../../../core/store/shared/shared.actions";
import { UsersService } from "../services/users.service";
const cache = new Map();
const cache_details = new Map();

@Injectable()
export class UsersEffects {
constructor( private usersService : UsersService,
    private store: Store<AppState>
){}
private actions$ = inject(Actions);
loadUsers$ = createEffect(()=> {
    return this.actions$.pipe(
        ofType(loadUsers),
    mergeMap((action) =>{
        const serialAction = JSON.stringify(action);
       if (!cache.has(serialAction)) {
            return this.usersService
                      .getUsers(action.page)
                      .pipe(
                       map((users)=>{
                           cache.set(serialAction, users);
                           this.store.dispatch(setLoadingSpinner({status:false}))
                          return loadUsersSuccess({users})
               })
            );
        }
        else {
            this.store.dispatch(setLoadingSpinner({status:false}))
            return of(loadUsersSuccess({ users: cache.get(serialAction) }));
         }
 
    }))
})


loadUserById$ = createEffect(()=> {
    return this.actions$.pipe(
        ofType(loadSingleUser),
    mergeMap((action) =>{
         const serialAction = JSON.stringify(action);
         if (!cache_details.has(serialAction)) {
            return this.usersService
                      .getUserById(action.id)
                      .pipe(
                       map((user)=>{
                            cache_details.set(serialAction, user);
                            this.store.dispatch(setLoadingSpinner({status:false}))
                          return loadSingleUserSuccess({user})
               })
            );
        }
        else {
            this.store.dispatch(setLoadingSpinner({status:false}))
            return of(loadSingleUserSuccess({ user: cache_details.get(serialAction) }));
         }
 
    }))
})
}