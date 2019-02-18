import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetsManagementDialogComponent } from './assets-management-dialog.component';

describe('AssetsManagementDialogComponent', () => {
  let component: AssetsManagementDialogComponent;
  let fixture: ComponentFixture<AssetsManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsManagementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
