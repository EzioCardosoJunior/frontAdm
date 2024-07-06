import { Component, OnInit } from '@angular/core';
import { CadProdService } from 'src/app/demo/adonisServices/cad-prod.service';

import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-prod-group-list',
  templateUrl: './prod-group-list.component.html',
})


export class ProdGroupListComponent {

  produtos: any;
  constructor(private api: CadProdService) { }


  ngOnInit() {
    this.loadProdutos();
  }

  onSort() {
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
}



