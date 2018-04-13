import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjetosngForComponent } from './array-objetosng-for.component';

describe('ArrayObjetosngForComponent', () => {
  let component: ArrayObjetosngForComponent;
  let fixture: ComponentFixture<ArrayObjetosngForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayObjetosngForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayObjetosngForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
