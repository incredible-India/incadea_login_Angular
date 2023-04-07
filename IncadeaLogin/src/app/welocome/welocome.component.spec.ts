import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocomeComponent } from './welocome.component';

describe('WelocomeComponent', () => {
  let component: WelocomeComponent;
  let fixture: ComponentFixture<WelocomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelocomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelocomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
