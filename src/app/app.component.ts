import{Component} from "@angular/core";
@Component({
  selector:"pm-root",
  template:`
  <a class='navbar-brand'>{{pageTitle}}</a>
  <nav class='navbar navbar-expand navbar-light bg-light'>

  <ul class='nav nav-pills'>
  <a class='nav-link' [routerLink]="['/welcome']"routerLinkActive="active">Home</a>
  <a class='nav-link'[routerLink]="['/products']"routerLinkActive="active">Product List</a>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `})
export class AppComponent{
  pageTitle: string = "Acme Product Management";
}
