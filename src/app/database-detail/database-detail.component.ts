import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';


import { Database } from '../database';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-database-detail',
  templateUrl: './database-detail.component.html',
  styleUrls: ['./database-detail.component.css']
})
export class DatabaseDetailComponent implements OnInit {

  @Input() database: Database;
  validateForm: FormGroup;
  controlArray = [];

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getDatabase();
  }

  buildForm(): void {
    this.validateForm = this.fb.group({
      verbose        : [ this.database.verbose ],
      host           : [ this.database.host ],
      port           : [ this.database.port ],
      username       : [ this.database.username ],
      password       : [ this.database.password ],
      schema         : [ this.database.schema ],
    });
    this.addField();
  }

  getDatabase(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.databaseService.getDatabase(id)
      .subscribe(
        database => {
          this.database = database;
          this.buildForm();
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.databaseService.updateDatabase(this.database)
      .subscribe(() => this.goBack());
  }


  addField(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    const id = (this.controlArray.length > 0) ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;
    const key = 'prop_key_' + id
    const val = 'prop_val_' + id
    const control = {
      id,
      key,
      val,
      controlKeyInstance: `prop_key_${id}`
      controlValInstance: `prop_val_${id}`
    };
    const index = this.controlArray.push(control);
    console.log(this.controlArray[this.controlArray.length - 1]);
    this.validateForm.addControl(this.controlArray[index - 1].controlKeyInstance, new FormControl(null, ));
    this.validateForm.addControl(this.controlArray[index - 1].controlValInstance, new FormControl(null, ));
  }

  removeField(i, e: MouseEvent) {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlKeyInstance);
      this.validateForm.removeControl(i.controlValInstance);
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    console.log(this.validateForm.value);
    this.goBack();
  }

}
