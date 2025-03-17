import { Component, inject } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../core/store/app.state';
import { setLoadingSpinner } from '../../../../core/store/shared/shared.actions';
import { loadSingleUser } from '../../store/users.actions';
import { getSingleUser } from '../../store/users.selector';

@Component({
  selector: 'user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  id : number = -1 ;
  user : Observable<User>;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.id = this.activatedRoute.snapshot.params['id'];
    this.user = this.store.select(getSingleUser);
    console.log(this.user)
    this.store.dispatch(loadSingleUser({id :this.id}));

  }

}
