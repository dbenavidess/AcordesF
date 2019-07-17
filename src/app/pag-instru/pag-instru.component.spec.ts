import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagInstruComponent } from './pag-instru.component';

describe('PagInstruComponent', () => {
  let component: PagInstruComponent;
  let fixture: ComponentFixture<PagInstruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagInstruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagInstruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
