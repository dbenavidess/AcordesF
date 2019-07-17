import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagBajoComponent } from './pag-bajo.component';

describe('PagBajoComponent', () => {
  let component: PagBajoComponent;
  let fixture: ComponentFixture<PagBajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagBajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
