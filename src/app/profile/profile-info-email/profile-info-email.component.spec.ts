import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoEmailComponent } from './profile-info-email.component';

describe('ProfileInfoEmailComponent', () => {
  let component: ProfileInfoEmailComponent;
  let fixture: ComponentFixture<ProfileInfoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
