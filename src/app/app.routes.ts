import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Contact', component:ContactComponent}

];
