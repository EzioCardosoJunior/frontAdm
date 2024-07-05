import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CadUserService } from 'src/app/demo/adonisServices/cad-user.service';


@Component({
  selector: 'app-prod-group-cad',  
  templateUrl: './prod-group-cad.component.html',
})


export class ProdGroupCadComponent {
  catForm: FormGroup;

  constructor(private fb: FormBuilder, private api: CadUserService) {  
    this.catForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  

  onSubmit() {
    if (this.catForm.valid) {
      const userData = this.catForm.value;
      console.log(this.catForm.value);   

      this.api.post('product-groups', userData).subscribe(response => {
        console.log('User registered successfully', response);        
      }, error => {
        console.error('Error registering user', error);
      });
      
      

    } else {
      this.catForm.markAllAsTouched();
    }
  }

  
}



