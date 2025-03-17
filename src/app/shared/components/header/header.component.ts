import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/config/config.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { clearSearch, searchUsersById } from '../../../slices/users/store/users.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  standalone: false,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  appName : string;
  searchTerm: string = '';

  constructor(
    private config : ConfigService,
    private store: Store<AppState>
  ) { 
    this.appName = this.config.applicationName;

  }

  ngOnInit(): void {
  }
  onSearch(event: KeyboardEvent): void {
    
    // Check if the user has pressed backspace or if the search term is empty
    if (this.searchTerm) {
      const userId = +this.searchTerm; // Convert search term to a number
      if( event.key === 'Backspace'){
        
        this.store.dispatch(clearSearch());  // Dispatch the clear search action
        this.store.dispatch(searchUsersById({ userId: userId.toString() }))
      }else  if (!isNaN(userId)) {
        // Dispatch the action to search users by ID
        
        this.store.dispatch(searchUsersById({ userId: userId.toString() }));
      }
    } else {
      console.log(2);
       
      this.store.dispatch(clearSearch());  // Dispatch the clear search action
    }
  }

}
