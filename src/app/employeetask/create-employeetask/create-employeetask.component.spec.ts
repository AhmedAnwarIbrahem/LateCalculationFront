import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeetaskComponent } from './create-employeetask.component';

describe('CreateEmployeetaskComponent', () => {
  let component: CreateEmployeetaskComponent;
  let fixture: ComponentFixture<CreateEmployeetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
