import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseExploreComponent } from './database-explore.component';

describe('DatabaseExploreComponent', () => {
  let component: DatabaseExploreComponent;
  let fixture: ComponentFixture<DatabaseExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
