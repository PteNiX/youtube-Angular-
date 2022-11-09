import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  /*     {
    path: 'youtube',
    redirectTo: 'youtube',
    pathMatch: 'full',

  }, */

  {
    path: '',
    component: CoreComponent,

    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },

      {
        path: 'main',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../youtube/youtube.module').then((y) => y.YoutubeModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../auth/auth.module').then((a) => a.AuthModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('../youtube/youtube.module').then((y) => y.YoutubeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
