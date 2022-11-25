import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutipleAvatarComponent } from './mutiple-avatar.component';

describe('MutipleAvatarComponent', () => {
  let component: MutipleAvatarComponent;
  let fixture: ComponentFixture<MutipleAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutipleAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutipleAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
