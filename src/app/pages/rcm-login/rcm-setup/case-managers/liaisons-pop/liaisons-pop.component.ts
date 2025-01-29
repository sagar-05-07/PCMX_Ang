import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-liaisons-pop',
  templateUrl: './liaisons-pop.component.html',
  styleUrl: './liaisons-pop.component.scss'
})
export class LiaisonsPopComponent {

  public addLeadForm: FormGroup;

  leftBoxItems: string[] = [
    'Dr. Aakash Mehra',
    'Mr. Rohan Kapoor',
    'Ms. Priya Sharma',
    'Dr. Ananya Reddy',
    'Mr. Hitesh Patel',
    'Ms. Kavya Natarajan',
    'Dr. Arindam Chatterjee',
    'Mr. Kunal Deshmukh',
    'Ms. Pooja Singh',
    'Mr. Rajiv Shah',
    'Ms. Riya Gupta',
    'Mr. Ankit Verma',
    'Dr. Neha Joshi',
    'Mr. Vikas Rao',
    'Ms. Sweta Sinha',
    'Dr. Ramesh Dubey',
  ];

  rightBoxItems: string[] = [
    'Mr. Ankit Verma',
    'Dr. Neha Joshi',
    'Mr. Vikas Rao',
    'Ms. Sweta Sinha',
    'Dr. Ramesh Dubey',
  ];


  constructor(
    public dialogRef: MatDialogRef<LiaisonsPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.createLeadForm();
  }

  createLeadForm() {
    this.addLeadForm = this.fb.group({
      selectType: new FormControl('', [Validators.required]),
      selectLocation: new FormControl('', [Validators.maxLength(30), Validators.required]),
      addAccountName: new FormControl('', [Validators.maxLength(30), Validators.required]),
      selectIndustry: new FormControl('', [Validators.maxLength(30), Validators.required]),
      selectCampaign: new FormControl(''),
      addUserEmail: new FormControl('', [Validators.email]),
      addUserNumber: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(15),
        Validators.pattern(/^[0-9!@#$&()`.+,/"-]*$/),
      ]),
      selectBdm: new FormControl('', [Validators.maxLength(30), Validators.required]),
      addcontact: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),
      leadgen: new FormControl('', [Validators.required]),
    });
  }

  moveRight() {
    // Move selected items from left to right
    const selectedOptions = Array.from((document.querySelector('select[ngModel="leftBoxItems"]') as HTMLSelectElement).selectedOptions);
    selectedOptions.forEach(option => {
      this.rightBoxItems.push(option.value);
      this.leftBoxItems.splice(this.leftBoxItems.indexOf(option.value), 1);
    });
  }

  moveLeft() {
    // Move selected items from right to left
    const selectedOptions = Array.from((document.querySelector('select[ngModel="rightBoxItems"]') as HTMLSelectElement).selectedOptions);
    selectedOptions.forEach(option => {
      this.leftBoxItems.push(option.value);
      this.rightBoxItems.splice(this.rightBoxItems.indexOf(option.value), 1);
    });
  }

  saveLead() {
    if (this.addLeadForm.valid) {
      console.log('Form Data:', this.addLeadForm.value);
      // Handle saving logic here
      this.close();
    } else {
      console.log('Form is not valid');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}