import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPasswordComponent } from './profile-info-password.component';

describe('ProfileInfoComponent', () => {
  let component: ProfileInfoPasswordComponent;
  let fixture: ComponentFixture<ProfileInfoPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileInfoPasswordComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
