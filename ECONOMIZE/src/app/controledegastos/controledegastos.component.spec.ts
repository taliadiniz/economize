import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControledegastosComponent } from './controledegastos.component';

describe('ControledegastosComponent', () => {
  let component: ControledegastosComponent;
  let fixture: ComponentFixture<ControledegastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControledegastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControledegastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
