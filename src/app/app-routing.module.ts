import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { HelplineComponent } from './helpline/helpline.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PreventionsComponent } from './preventions/preventions.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'states',component:StatesComponent},
  {path:'helpline',component:HelplineComponent},
  {path:'symptoms',component:SymptomsComponent},
  {path:'preventions',component:PreventionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
