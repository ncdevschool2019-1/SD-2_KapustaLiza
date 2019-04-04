import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from './account/account.component';
import {CatalogComponent} from './catalog/catalog.component';
import {BillingAccountComponent} from './billing-account/billing-account.component';
import {CatalogWomenComponent} from './catalog-women/catalog-women.component';
import {CatalogDesignComponent} from './catalog-design/catalog-design.component';
import {CatalogCarsComponent} from './catalog-cars/catalog-cars.component';
import {MainComponent} from './main/main.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'account/billing-account', component: BillingAccountComponent},
  {path: 'catalog/women', component: CatalogWomenComponent},
  {path: 'catalog/design', component: CatalogDesignComponent},
  {path: 'catalog/cars', component: CatalogCarsComponent},
  { path: '', component: MainComponent},
  {path: 'login', component: FormComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
