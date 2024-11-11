import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeacherPageComponent } from './manage-teacher-page.component';

describe('ManageTeacherPageComponent', () => {
  let component: ManageTeacherPageComponent;
  let fixture: ComponentFixture<ManageTeacherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTeacherPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
