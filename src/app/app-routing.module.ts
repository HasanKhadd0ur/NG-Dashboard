import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Register routes
    exports: [RouterModule] // Export RouterModule for use in other modules
  })
  export class AppRoutingModule { }