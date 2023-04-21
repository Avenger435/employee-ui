import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/model/employee';
import { EmployeeService } from 'src/service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    department: new FormControl('IT', [Validators.required, Validators.minLength(2)]),
    address: new FormGroup({
      address_type: new FormControl('home', [Validators.required, Validators.minLength(2)]),
      street: new FormControl('Extended road', [Validators.required, Validators.minLength(2)]),
      landmark: new FormControl('Esperanza', [Validators.required, Validators.minLength(2)]),
      city: new FormControl('Bengaluru', [Validators.required, Validators.minLength(2)]),
      state: new FormControl('KA', [Validators.required, Validators.minLength(2)]),
      pincode: new FormControl('560066', [Validators.required, Validators.minLength(2)]),
    }),
    insurance: new FormGroup({
      insurance_type: new FormControl('Basic', [Validators.required, Validators.minLength(2)]),
      plan_name: new FormControl('Bheema', [Validators.required, Validators.minLength(2)]),
      premium: new FormControl('12000', [Validators.required, Validators.minLength(2)]),
      expiry_date: new FormControl('20221031', [Validators.required, Validators.minLength(2)]),
      due_date: new FormControl('20211031', [Validators.required, Validators.minLength(2)])
    })
  })

  displayResults = new FormControl('');

  employee: Employee = new Employee();
  displayEmployee: Employee = new Employee();
  name: string = '';

  constructor(private employeeService: EmployeeService) {

    const display: Boolean = false;

  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('submit clicked', this.form.value);
    this.employee = new Employee(this.form.value);
    this.employee.addresses.push(this.form.value['address']);
    console.log('employee', this.employee)
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log('data', data);
      this.displayEmployee = new Employee(data);
      this.name=this.displayEmployee.name;
      console.log('data.employee.employeeResponseMsg', this.displayEmployee)
    });
  }

}
