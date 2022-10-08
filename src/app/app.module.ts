import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';

import { SearchResultsComponent } from './header/search/search-results/search-results.component';
import { SearchItemComponent } from './header/search/search-item/search-item.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginComponent } from './header/login/login.component';
import { SettingButtonComponent } from './header/setting-button/setting-button.component';
import { SearchInputComponent } from './header/search/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { FilterInputComponent } from './filter/filter-input/filter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    LogoComponent,
    SettingButtonComponent,
    SearchInputComponent,
    LoginComponent,
    FilterInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}