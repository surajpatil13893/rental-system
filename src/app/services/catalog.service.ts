import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private brancheCategories: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private branchSubCategoriesData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/catalog.json');
  }

  sendBranchCategoriesData(brancheCategories): void{
    this.brancheCategories.next(brancheCategories);
  }
  getBranchCategoriesData(): Observable<any[]> {
    return this.brancheCategories;
  }
  sendBranchSubCategoriesData(brancheSubCategories): void{
    this.branchSubCategoriesData.next(brancheSubCategories);
  }
  getBranchSubCategoriesData(): Observable<any[]> {
    return this.branchSubCategoriesData;
  }
}
