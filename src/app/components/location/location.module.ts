import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog/catalog-details/catalog-details.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { CategoryComponent } from './category/category.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LocationComponent, CatalogComponent, CatalogDetailsComponent, CategoryComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    BreadcrumbModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class LocationModule { }
