import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassAndNgstyleComponent } from './ngclass-and-ngstyle.component';

describe('NgclassAndNgstyleComponent', () => {
  let component: NgclassAndNgstyleComponent;
  let fixture: ComponentFixture<NgclassAndNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassAndNgstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassAndNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
