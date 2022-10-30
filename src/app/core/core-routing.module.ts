import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },

  {
    path: 'youtube',
    component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../auth/auth.module').then((a) => a.AuthModule),
          outlet: 'page',
      },
 /*      {
        path: '',
        loadChildren: () =>
          import('../youtube/youtube.module').then((y) => y.YoutubeModule),
        outlet: 'page',
      }, */
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
