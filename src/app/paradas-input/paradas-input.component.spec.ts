import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadasInputComponent } from './paradas-input.component';

describe('ParadasInputComponent', () => {
  let component: ParadasInputComponent;
  let fixture: ComponentFixture<ParadasInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadasInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
