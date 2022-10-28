import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { SettingButtonComponent } from './components/setting-button/setting-button.component';
import { SearchInputComponent } from './components/search/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';

import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    SettingButtonComponent,
    SearchInputComponent,
    HeaderComponent,
    FilterInputComponent,
  ],
  providers: [DataService],
  imports: [CommonModule, FormsModule, CoreRoutingModule],
})
export class CoreModule {}
