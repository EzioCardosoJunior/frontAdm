import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CadProdService } from 'src/app/demo/adonisServices/cad-prod.service';


@Component({
  selector: 'app-prod-group-cad',  
  templateUrl: './prod-group-cad.component.html',
})


export class ProdGroupCadComponent {
  catForm: FormGroup;

  constructor(private fb: FormBuilder, private api: CadProdService) {  
    this.catForm = this.fb.group({
      name: ['', Validators.required],
    });
  }
  

  onSubmit() {
    if (this.catForm.valid) {
      const userData = this.catForm.value;
      console.log(this.catForm.value);   

      this.api.post(userData).subscribe(response => {
        console.log('Produto cadastrado com sucesso', response);        
      }, error => {
        console.error('Error registering', error);
      });
      
      

    } else {
      this.catForm.markAllAsTouched();
    }
  }

  
}



