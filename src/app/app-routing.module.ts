import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users', 
    pathMatch: 'full'
 
  },
  {
    path: 'users',
    loadChildren: () => import('./slices/users/users.module').then(m=>m.UsersModule)
  },
  { 
    path: '**',
    component: NotfoundComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
