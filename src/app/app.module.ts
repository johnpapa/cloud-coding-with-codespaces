import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './router';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { externalModules } from './build-specific';
import { declarations } from './core';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, declarations],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {}),
    AppStoreModule,
    SharedModule,
    externalModules,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
