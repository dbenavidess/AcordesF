import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCajonComponent } from './pag-cajon.component';

describe('PagCajonComponent', () => {
  let component: PagCajonComponent;
  let fixture: ComponentFixture<PagCajonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagCajonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagCajonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
