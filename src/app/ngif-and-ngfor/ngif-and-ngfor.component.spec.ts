import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifAndNgforComponent } from './ngif-and-ngfor.component';

describe('NgifAndNgforComponent', () => {
  let component: NgifAndNgforComponent;
  let fixture: ComponentFixture<NgifAndNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifAndNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifAndNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
