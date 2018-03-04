import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDetailComponent } from './database-detail.component';

describe('DatabaseDetailComponent', () => {
  let component: DatabaseDetailComponent;
  let fixture: ComponentFixture<DatabaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
