import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerPageComponent } from './manage-student-page.component';

describe('ManageCustomerPageComponent', () => {
  let component: ManageCustomerPageComponent;
  let fixture: ComponentFixture<ManageCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCustomerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
