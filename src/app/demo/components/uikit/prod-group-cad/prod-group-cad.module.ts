import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdGroupCadComponent } from './prod-group-cad.component';
import { ProdGroupCadRoutingModule } from './prod-group-cad-routing';
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



@NgModule({

  imports: [
    CommonModule,
    ProdGroupCadRoutingModule,
    ReactiveFormsModule,
    CadUserRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule
  ],
  declarations: [ProdGroupCadComponent]
})
export class ProdGroupCadModule { }
