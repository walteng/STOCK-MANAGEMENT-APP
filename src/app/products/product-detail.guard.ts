import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs';


// import {ProductDetailGuard} from 'src/app/products/product-detail.guard'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {


constructor(private router: Router) {};


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
      const id = +next.url[1].path;
      const id2 = next.paramMap.get('id');
      if (isNaN(id)|| id < 1){
        alert("Invalid product Id");
        this.router.navigate(['/products']);
        return false;
    }
  return true;
};
}
