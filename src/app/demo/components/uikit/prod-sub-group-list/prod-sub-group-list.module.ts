import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { CadUserRoutingModule } from '../caduser/cad-user-routing.module';
import { TableModule } from 'primeng/table';
import { ProdSubGroupListRoutingModule } from './prod-sub-group-list-routing';
import { ProdSubGroupListComponent } from './prod-sub-group-list.component';



@NgModule({

  imports: [
    CommonModule,
    ProdSubGroupListRoutingModule,
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
  declarations: [ProdSubGroupListComponent]
})
export class ProdSubGroupListModule { }
