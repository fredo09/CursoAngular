import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivaIfComponent } from './ejdirectiva-if.component';

describe('EjdirectivaIfComponent', () => {
  let component: EjdirectivaIfComponent;
  let fixture: ComponentFixture<EjdirectivaIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirectivaIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirectivaIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
