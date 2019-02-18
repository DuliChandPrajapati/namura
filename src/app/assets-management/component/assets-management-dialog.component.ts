import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssetsManagementComponent } from '../page/assets-management.component';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/core/services';

@Component({
  selector: 'app-assets-management-dialog',
  templateUrl: './assets-management-dialog.component.html',
  styleUrls: ['./assets-management-dialog.component.css']
})
export class AssetsManagementDialogComponent implements OnInit {
  assetsData: any;
  assetsListForm: FormGroup;
  assetsFormData: any = [];
  submitted: boolean = false;;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AssetsManagementComponent>,
    private formBuilder: FormBuilder,private tosterService:ToasterService ) {
    this.assetsData = data;
    console.log(this.assetsData);
  }

  ngOnInit() {
    this.createFormControl();
    this.loadFormData();
  }
  loadFormData(): any {
    console.log(this.assetsData.formData);
    if (this.assetsData.formType === 'edit') {
      this.assetsListForm.patchValue(this.assetsData.formData);
      console.log(this.assetsListForm);
    }
  }

  createFormControl() {
    this.assetsListForm = this.formBuilder.group({
      'pid': new FormControl('', [Validators.required]),
      'assetsName': new FormControl('', [Validators.required])
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.assetsListForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.assetsListForm.invalid) {
      return;
    }
    this.dialogRef.close();
    this.tosterService.showSuccess("Data is succefully Submitted");
    console.log({PID:this.assetsListForm.controls['pid'].value,
  AssetName:this.assetsListForm.controls['assetsName'].value});
  }


}
