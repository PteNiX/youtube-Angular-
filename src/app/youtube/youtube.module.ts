import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './components/header/search/search-results/search-results.component';
import { CardComponent } from './components/header/search/search-results/card/card.component';
import { SearchFilterPipe } from './pipes/search-pipe/search-filter.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchResultsComponent,
    CardComponent,
    SearchFilterPipe,
  ],
  imports: [CommonModule],
})
export class YoutubeModule {}
