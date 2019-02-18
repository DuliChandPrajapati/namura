import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PricingComponent } from '../page/pricing.component';
import { ToasterService } from 'src/app/core/services';

@Component({
  selector: 'app-pricing-dialog-component',
  templateUrl: './pricing-dialog-component.component.html',
  styleUrls: ['./pricing-dialog-component.component.css']
})
export class PricingDialogComponentComponent implements OnInit {
  priceData: any;
  priceListForm: FormGroup;
 // priceFormData: any = [];
  submitted: boolean = false;;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PricingComponent>,
    private formBuilder: FormBuilder, private tosterService: ToasterService) {
    this.priceData = data;
    console.log(this.priceData);
  }

  ngOnInit() {
    this.createFormControl();
    this.loadFormData();
  }
  loadFormData(): any {
    console.log(this.priceData.formData);
    if (this.priceData.formType === 'edit') {
      this.priceListForm.patchValue(this.priceData.formData);
      console.log(this.priceListForm);
    }
  }

  createFormControl() {
    this.priceListForm = this.formBuilder.group({
      'id': new FormControl('', [Validators.required]),
      'ciuType': new FormControl('', [Validators.required]),
      'countryName': new FormControl('', [Validators.required]),
      'minCore': new FormControl('', [Validators.required]),
      'maxCore': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'effectiveFrom': new FormControl('', [Validators.required]),
      'effectiveTo': new FormControl('', [Validators.required]),
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.priceListForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.priceListForm.invalid) {
      return;
    }
    this.dialogRef.close();
    this.tosterService.showSuccess("Data is succefully Submitted");
    console.log({
      ID: this.priceListForm.controls['pid'].value,
      CIUType: this.priceListForm.controls['ciuType'].value,
      countryName: this.priceListForm.controls['countryName'].value,
      minCore: this.priceListForm.controls['minCore'].value,
      maxCore: this.priceListForm.controls['maxCore'].value,
      price: this.priceListForm.controls['price'].value,
      effectiveFrom: this.priceListForm.controls['effectiveFrom'].value,
      effectiveTo: this.priceListForm.controls['effectiveTo'].value
    });
  }

}
