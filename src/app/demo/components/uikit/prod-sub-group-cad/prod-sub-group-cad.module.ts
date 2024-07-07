import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdSubGroupCadRoutingModule } from './prod-sub-group-cad-routing';

import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProdSubGroupCadComponent } from './prod-sub-group-cad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
	imports: [
		CommonModule,
		ProdSubGroupCadRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		FormsModule,
		ReactiveFormsModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule
	],
	declarations: [ProdSubGroupCadComponent]
})
export class ProdSubGroupCadModule { }
