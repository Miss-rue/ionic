import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrgpasswordPage } from './frgpassword.page';

const routes: Routes = [
  {
    path: '',
    component: FrgpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrgpasswordPageRoutingModule {}
