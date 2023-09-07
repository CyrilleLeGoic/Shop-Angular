import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ModalProductViewComponent } from './components/modal-product-view/modal-product-view.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ProductItemComponent,
    ProductListComponent,
    ModalProductViewComponent,
    SigninComponent,
    SignupComponent,
    AccueilComponent,
    ProductDetailsComponent,
    LoadingComponent,
    ProductDescriptionComponent,
    ProductAdditionalInfoComponent,
    ProductVendorComponent,
    ProductReviewsComponent,
    AsideNavComponent,
    HomeSliderComponent,
    ProductsContainerComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule, /* Module pour le navigateur */
    HttpClientModule, /* Module pour les requêtes HTTP */
    FormsModule, /* Module pour les formulaires et permet d'utiliser ngModel */
    CommonModule, /* Module pour les directives ngIf, ngFor, ... */
    ReactiveFormsModule, /* Module pour les formulaires réactifs */
    RouterModule.forRoot(ROUTES) /* Module pour le routage */


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
