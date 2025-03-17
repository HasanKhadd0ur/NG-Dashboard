import { Component, inject, ViewChild } from '@angular/core';
import { PaginatedResult } from '../../../../core/models/PaginatedResult';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import { setLoadingSpinner } from '../../../../core/store/shared/shared.actions';
import { loadUsers, searchUsersById } from '../../store/users.actions';
import { getUsers } from '../../store/users.selector';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

  // pagination info 
  currentPage:number = 1 ;
  pageSize: number = 6; 
  totalItems: number = 0;

  searchTerm: string = '';  // Store the search term

  users : Observable<PaginatedResult<User>>; // Paginated users 

  private activatedRoute = inject(ActivatedRoute);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.users = this.store.select(getUsers);
    this.store.dispatch(loadUsers({page :this.currentPage}));
  }
 

  goToPreviousPage(page: number): void {
    this.currentPage = page;
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage -1;
      this.store.dispatch(loadUsers({page :this.currentPage})); 

    }
  }
  goToNextPage(page: number): void {
    this.currentPage = page;
      this.currentPage = this.currentPage +1;
      this.store.dispatch(loadUsers({page :this.currentPage})); 

  }
  searchUserById(): void {
    if (this.searchTerm) {
      this.store.dispatch(searchUsersById({ userId: this.searchTerm }));
    } else {
      this.store.dispatch(loadUsers({ page: this.currentPage }));
    }
  }

}
