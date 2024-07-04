

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadUserRoutingModule } from './cad-user-routing.module';
import { ChartModule } from 'primeng/chart'
import { CadUserComponent } from './cad-user.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	imports: [
		ReactiveFormsModule,
		CommonModule,
		CadUserRoutingModule,
		ChartModule,
        AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule
	],
	declarations: [CadUserComponent]
})
export class CadUserModule { }
