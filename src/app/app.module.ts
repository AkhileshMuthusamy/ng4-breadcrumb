import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';

const routes: Route = [];

@NgModule({
  declarations: [AppComponent, Route1Component],
  imports: [BrowserModule, RouterModule.forRoot(routes), McBreadcrumbsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
