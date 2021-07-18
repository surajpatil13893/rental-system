import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { CategoryComponent } from './category/category.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';


@NgModule({
  declarations: [LocationComponent, CategoryComponent, CategoryDetailsComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    BreadcrumbModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class LocationModule { }
