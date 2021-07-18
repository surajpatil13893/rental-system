import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  branchCategories: any;

  constructor(private catalogService: CatalogService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.catalogService.getBranchCategoriesData().subscribe((data) => {
      this.branchCategories = [];
      this.branchCategories = data;
      console.log(data);
  });
  }
  catalogDetails(category): void{
    this.catalogService.sendBranchSubCategoriesData(category.subcategories);
    this.router.navigate(['location/category-details']);
  }
}
