import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterModule } from '@angular/router';

import { SearchResultsComponent } from './youtube/components/header/search/search-results/search-results.component';

import { LogoComponent } from './core/components/logo/logo.component';
import { LoginComponent } from './core/components/login/login.component';
import { SettingButtonComponent } from './core/components/setting-button/setting-button.component';
import { SearchInputComponent } from './core/components/search/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { FilterInputComponent } from './core/components/filter-input/filter-input.component';
import { CardComponent } from './youtube/components/header/search/search-results/card/card.component';
import { SearchFilterPipe } from './youtube/pipes/search-pipe/search-filter.pipe';
import { DataService } from '../app/core/services/data.service';
import { CoreModule } from './core/core.module';

import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    LogoComponent,
    SettingButtonComponent,
    SearchInputComponent,
    LoginComponent,
    FilterInputComponent,
    CardComponent,
    SearchFilterPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    RouterModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
