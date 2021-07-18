import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
    }
  },
  { path: 'location', loadChildren: () => import('./components/location/location.module').then(m => m.LocationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
