import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

/*   {
    path: '',
    pathMatch: 'full',
    redirectTo: 'core',
  },

  {
    path: 'core',
    loadChildren: () =>
      import('./core/core.component').then((y) => y.CoreComponent),
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
