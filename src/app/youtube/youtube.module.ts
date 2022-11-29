import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { CardComponent } from './pages/search/search-results/card/card.component';
import { SearchFilterPipe } from './pipes/search-pipe/search-filter.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchResultsComponent,
    CardComponent,
    SearchFilterPipe,
    MainPageComponent,
    DetailedPageComponent,
  ],
  imports: [YoutubeRoutingModule, FormsModule, CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true },
  ],
})
export class YoutubeModule {}
