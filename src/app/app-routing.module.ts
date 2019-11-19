import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { PresentationComponent } from './presentation/presentation.component';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { SelectedEmployeComponent } from './selected-employe/selected-employe.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';


const routes: Routes = [
  {path:'presentation',component:PresentationComponent},
  {path:'ajouter-employe',component:AjouterEmployeComponent},
  {path:'employes-list',component:EmployesListComponent},
  {path:'employes-list/:matricule', component:SelectedEmployeComponent},

  {path:'', redirectTo:'presentation', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
