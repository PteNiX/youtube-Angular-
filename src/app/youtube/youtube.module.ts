import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { CardComponent } from './pages/search/search-results/card/card.component';
import { SearchFilterPipe } from './pipes/search-pipe/search-filter.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeComponent } from './youtube.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchResultsComponent,
    CardComponent,
    SearchFilterPipe,
    MainPageComponent,
    YoutubeComponent,
  ],
  imports: [YoutubeRoutingModule, FormsModule, CommonModule],
})
export class YoutubeModule {}
