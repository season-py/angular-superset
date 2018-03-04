import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatabasesComponent } from './databases/databases.component';
import { DatabaseDetailComponent } from './database-detail/database-detail.component';

const routes: Routes = [
      { path: '', redirectTo: '/databases', pathMatch: 'full' },
      { path: 'databases', component: DatabasesComponent },
      { path: 'database/:id', component: DatabaseDetailComponent },
];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
})
export class AppRoutingModule {}
