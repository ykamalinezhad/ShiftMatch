import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private staffService: StaffService,
    private snacks: MatSnackBar
  ) { 
  }

  ngOnInit(): void {    
    this.form = this.fb.group({
      name: [null],
      position: [null]
    });  
  }

  addEmployee() {
    const formValue = this.form.value;
    try {
      // this.staffService.addEmployee(formValue.name, formValue.position)
      this.snacks.open('The new employee is added successfully',"", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      
    }
    catch(e) {
      this.snacks.open('error!!!!')
    }
  }
}
