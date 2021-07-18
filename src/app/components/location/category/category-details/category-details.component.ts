import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  branchSubCategories: any[];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getBranchSubCategoriesData().subscribe((data) => {
      this.branchSubCategories = [];
      this.branchSubCategories = data;
      console.log(data);
  });
  }
}
