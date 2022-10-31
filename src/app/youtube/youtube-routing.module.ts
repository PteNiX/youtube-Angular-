import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'results' },
  { path: 'main', component: MainPageComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: 'info', component: DetailedPageComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
