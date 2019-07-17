import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagUkeleleComponent } from './pag-ukelele.component';

describe('PagUkeleleComponent', () => {
  let component: PagUkeleleComponent;
  let fixture: ComponentFixture<PagUkeleleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagUkeleleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagUkeleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
