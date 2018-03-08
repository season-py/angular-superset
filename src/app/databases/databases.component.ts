import { Component, OnInit } from '@angular/core';

import { Database } from '../database';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})
export class DatabasesComponent implements OnInit {

  databases: Database[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getDatabases();
  }
    
  getDatabases(): void {
    this.databaseService.getDatabases()
    .subscribe(databases => this.databases = databases);
  }

  delete_database(database): void {
    this.databases = this.databases.filter(d => d !== database);
  }
  
}
