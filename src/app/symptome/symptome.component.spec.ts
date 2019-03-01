import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomeComponent } from './symptome.component';

describe('SymptomeComponent', () => {
  let component: SymptomeComponent;
  let fixture: ComponentFixture<SymptomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
