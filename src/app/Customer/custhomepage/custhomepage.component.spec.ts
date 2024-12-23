import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusthomepageComponent } from './custhomepage.component';

describe('CusthomepageComponent', () => {
  let component: CusthomepageComponent;
  let fixture: ComponentFixture<CusthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusthomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
