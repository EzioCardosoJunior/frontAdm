

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadUserRoutingModule } from './cad-user-routing.module';
import { ChartModule } from 'primeng/chart'
import { CadUserComponent } from './cad-user.component';

@NgModule({
	imports: [
		CommonModule,
		CadUserRoutingModule,
		ChartModule
	],
	declarations: [CadUserComponent]
})
export class CadUserModule { }
