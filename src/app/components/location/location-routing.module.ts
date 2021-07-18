import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryComponent } from './category/category.component';

import { LocationComponent } from './location.component';

const routes: Routes = [{
  path: '',
  component: LocationComponent,
},
{
  path: 'category',
  component: CategoryComponent,
  data: {
    breadcrumb: 'category',
  },
},
{
  path: 'category-details',
  component: CategoryDetailsComponent,
  data: {
    breadcrumb: 'category-details',
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
