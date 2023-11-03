import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'visualization', component: VisualizationsComponent }, // Define the route for VisualizationsComponent
  { path: 'app', component: HeaderComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
