import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.scss']
})
export class CatalogDetailsComponent implements OnInit {
  branchSubCategories: any[];

  constructor(private catalogService: CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.catalogService.getBranchSubCategoriesData().subscribe((data) => {
      this.branchSubCategories = [];
      this.branchSubCategories = data;
      console.log(data);
  });
  }
}
