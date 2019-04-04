import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogWomenComponent } from './catalog-women/catalog-women.component';
import { CatalogCarsComponent } from './catalog-cars/catalog-cars.component';
import { CatalogDesignComponent } from './catalog-design/catalog-design.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BillingAccountComponent } from './billing-account/billing-account.component';
import { AppRoutingModule } from './app-routing.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ButtonHolaComponent } from './button-hola/button-hola.component';
import { PopularComponent } from './popular/popular.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CatalogComponent,
    CatalogWomenComponent,
    CatalogCarsComponent,
    CatalogDesignComponent,
    MainComponent,
    MenuComponent,
    SideBarComponent,
    BillingAccountComponent,
    SubscriptionsComponent,
    ButtonHolaComponent,
    PopularComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
