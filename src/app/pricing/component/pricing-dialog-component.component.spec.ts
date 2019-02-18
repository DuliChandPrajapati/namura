import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingDialogComponentComponent } from './pricing-dialog-component.component';



describe('PricingDialogComponentComponent', () => {
  let component: PricingDialogComponentComponent;
  let fixture: ComponentFixture<PricingDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
