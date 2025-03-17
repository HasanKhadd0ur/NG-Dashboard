import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './views/users-list/users-list.component';
import { UserDetailsComponent } from './views/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 
import { MatPaginator } from '@angular/material/paginator'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserCardComponent } from './components/user-card/user-card.component'; 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { userReducer, singleUserReducer } from './store/users.reducer';
import { USER_STATE_NAME, SINGLE_USER_STATE_NAME } from './store/users.selector';
import { FormsModule } from '@angular/forms';
import { FullnamePipe } from "../../shared/pipes/fullname/fullname.pipe";
import { SharedModule } from '../../shared/shared.module';
import { UserRowComponent } from './components/user-row/user-row.component';

const routes: Routes = [
  {
      path: '',
      component:UsersListComponent,
  },
  {   path: 'details/:id',
      component: UserDetailsComponent
  }
]

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    UserCardComponent,
    UserRowComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(USER_STATE_NAME, userReducer),
    StoreModule.forFeature(SINGLE_USER_STATE_NAME, singleUserReducer),
    EffectsModule.forFeature([UsersEffects]),
    MatCardModule,
    MatPaginator,
    SharedModule,
    MatPaginatorModule,
    FullnamePipe
]
})
export class UsersModule { }
