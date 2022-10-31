import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube/main',
  },

  {
    path: 'youtube',
    component: CoreComponent,

    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../auth/auth.module').then((a) => a.AuthModule),
      },
      {
        path: 'main',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../youtube/youtube.module').then((y) => y.YoutubeModule),
      },

    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
