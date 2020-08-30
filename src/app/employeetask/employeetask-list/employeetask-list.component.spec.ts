import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetaskListComponent } from './employeetask-list.component';

describe('EmployeetaskListComponent', () => {
  let component: EmployeetaskListComponent;
  let fixture: ComponentFixture<EmployeetaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
