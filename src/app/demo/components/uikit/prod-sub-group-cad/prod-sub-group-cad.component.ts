import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProdService } from 'src/app/demo/adonisServices/prod.service';

@Component({
  selector: 'app-prod-sub-group-cad',
  templateUrl: './prod-sub-group-cad.component.html',
})
export class ProdSubGroupCadComponent {

  subCadForm: FormGroup;
  produtos: any;

  constructor(private fb: FormBuilder, private api: ProdService) {  
    this.subCadForm = this.fb.group({
      name: ['', Validators.required],
      group_id: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadProdutos();
  }


  loadProdutos() {
    this.api.get().subscribe(
      response => {
        this.produtos = response;
        console.log('Produtos carregados com sucesso', this.produtos.length);
      },
      error => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }

  getProdutoLabel(produto: any): string {
    return `${produto.id} - ${produto.name}`;
  }

  onSubmit() {
    if (this.subCadForm.valid) {
      const formValues = this.subCadForm.value;
      console.log(formValues);   

      // Aqui você pode acessar o objeto completo do produto selecionado em groupCode
      const selectedProduct = formValues;
      console.log('Selected Product ID:', selectedProduct.groupCode);
      console.log('Selected Product Name:', selectedProduct.name);

      this.api.subGroupPost(formValues).subscribe(response => {
        console.log('Produto cadastrado com sucesso', response);        
      }, error => {
        console.error('Error registering', error);
      });
    } else {
      this.subCadForm.markAllAsTouched();
    }
  }

}
