import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/demo/adonisServices/prod.service';

import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-prod-sub-group-list',
  templateUrl: './prod-sub-group-list.component.html',
})


export class ProdSubGroupListComponent {

  produtos: any;
  constructor(private api: ProdService) { }


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



