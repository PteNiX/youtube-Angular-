import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

/*   {
    path: '',
    redirectTo: 'youtube/main',
    pathMatch: 'full',
  }, */

 /*  {
    path: 'core',
    loadChildren: () =>
      import('./core/core.component').then((y) => y.CoreComponent),
  },  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
