import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
// eslint-disable-next-line import/namespace
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [AuthGuard],
})
export class AuthModule {}
