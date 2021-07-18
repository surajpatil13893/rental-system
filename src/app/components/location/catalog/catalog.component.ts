import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
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
    this.router.navigate(['category/category-details'], {
      relativeTo: this.activatedRoute});
  }

}
