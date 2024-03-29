import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';

export const ROUTES : Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },

    {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: AccueilComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:slug',
    component : ProductDetailsComponent,
    pathMatch: 'prefix',
    children : [
      {
        path: '',
        redirectTo: 'description',
        pathMatch: 'full'
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
      {
        path: 'additional',
        component : ProductAdditionalInfoComponent,
      },
      {
        path: 'vendor',
        component: ProductVendorComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      }


    ]
  },
  {
    path: '**',
    component: Page404Component,
    pathMatch: 'full'
  },
]
