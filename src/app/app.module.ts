import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabasesComponent } from './databases/databases.component';
import { TablesComponent } from './tables/tables.component';
import { SlicesComponent } from './slices/slices.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { ChartsComponent } from './charts/charts.component';

import { DatabaseService } from './database.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { DatabaseDetailComponent } from './database-detail/database-detail.component';
import { DatabaseExploreComponent } from './database-explore/database-explore.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabasesComponent,
    TablesComponent,
    SlicesComponent,
    DashboardsComponent,
    ChartsComponent,
    DatabaseDetailComponent,
    DatabaseExploreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
