import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarComponent } from './components/star/star.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  { path: 'productList', component: ProductListComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'prouctlist' },
  { path: 'login', component: LoginComponent },
  { path: 'productadd', component: ProductAddComponent },
  { path: '**', component: NotFoundComponent },



]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductAddComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutes,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
