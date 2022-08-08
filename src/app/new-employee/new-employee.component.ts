import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private staffService: StaffService
  ) { 
  }

  ngOnInit(): void {
    console.log(this.staffService.getStaffDetails())
    
    this.form = this.fb.group({
      name: [null],
      position: [null]
    });  
  }

  addEmployee() {
    console.log(this.form.value)
    const formValue = this.form.value;
    this.staffService.addEmployee(formValue.name, formValue.position)
  }
}
