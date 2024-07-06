import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdGroupListComponent } from './prod-group-list.component';
import { ProdGroupListRoutingModule } from './prod-group-list-routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { CadUserRoutingModule } from 'src/app/demo/components/uikit/caduser/cad-user-routing.module';
import { TableModule } from 'primeng/table';



@NgModule({

  imports: [
    CommonModule,
    ProdGroupListRoutingModule,
    ReactiveFormsModule,
    CadUserRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    TableModule
  ],
  declarations: [ProdGroupListComponent]
})
export class ProdGroupListModule { }
