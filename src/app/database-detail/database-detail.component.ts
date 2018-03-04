import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Database } from '../database';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-database-detail',
  templateUrl: './database-detail.component.html',
  styleUrls: ['./database-detail.component.css']
})
export class DatabaseDetailComponent implements OnInit {

  @Input() database: Database;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDatabase();
  }

  getDatabase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.databaseService.getDatabase(id)
      .subscribe(database => this.database = database);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.databaseService.updateDatabase(this.database)
      .subscribe(() => this.goBack());
  }
}
