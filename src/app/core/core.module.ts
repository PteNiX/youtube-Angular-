import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginComponent } from './components/header/login/login.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from '../youtube/interceptors/youtube.interceptor';

@NgModule({
  declarations: [
    LogoComponent,
    LoginComponent,
    SettingButtonComponent,
    SearchInputComponent,
    HeaderComponent,
    FilterInputComponent,
    CoreComponent,
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
  imports: [CommonModule, FormsModule, CoreRoutingModule, HttpClientModule],
})
export class CoreModule {}
