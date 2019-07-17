import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAboutComponent } from './pag-about.component';

describe('PagAboutComponent', () => {
  let component: PagAboutComponent;
  let fixture: ComponentFixture<PagAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
