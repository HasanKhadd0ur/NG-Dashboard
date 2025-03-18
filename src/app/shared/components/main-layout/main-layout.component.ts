import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getLoading } from '../../../core/store/shared/shared.selector';
import { AppState } from '../../../core/store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  showLoading$ : Observable<boolean>;
  
  constructor(private store : Store<AppState>
  ){

  }
  ngAfterViewChecked(): void {
    debugger
    this.showLoading$  = this.store.select(getLoading);
  }

}
