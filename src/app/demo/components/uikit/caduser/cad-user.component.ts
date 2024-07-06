import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CadUserService } from 'src/app/demo/adonisServices/cad-user.service';


@Component({
  selector: 'app-cad-user',
  templateUrl: './cad-user.component.html'
})


export class CadUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private api: CadUserService) {  
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(this.userForm.value);   

      this.api.post(userData).subscribe(response => {
        console.log('User registered successfully', response);        
      }, error => {
        console.error('Error registering user', error);
      });
      
      

    } else {
      this.userForm.markAllAsTouched();
    }
  }

  
}
