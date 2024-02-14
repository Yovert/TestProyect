import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { SingleComponent } from './components/single/single.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'single', component:SingleComponent},
  {path: '**', component:ErrorComponent },
];
