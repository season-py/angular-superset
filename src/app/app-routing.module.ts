import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatabasesComponent } from './databases/databases.component';
import { DatabaseDetailComponent } from './database-detail/database-detail.component';
import { DatabaseExploreComponent } from './database-explore/database-explore.component';

const routes: Routes = [
      { path: '', redirectTo: '/databases', pathMatch: 'full' },
      { path: 'databases', component: DatabasesComponent },
      { path: 'database/:id', component: DatabaseDetailComponent },
      { path: 'database/:id/explore', component: DatabaseExploreComponent },
];

@NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
})
export class AppRoutingModule {}
