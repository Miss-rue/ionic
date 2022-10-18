import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChfpasswordPage } from './chfpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ChfpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChfpasswordPageRoutingModule {}
