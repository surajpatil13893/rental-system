import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  locations: any = [];
  constructor(private catalogService: CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.catalogService.getJSON().subscribe(data => {
      this.locations = data.data.locations;
      console.log(this.locations);
    });
  }
  catalogDetails(branch, categories): void {
    this.catalogService.sendBranchCategoriesData(categories);
    this.router.navigate(['location/category']);
   }

}

