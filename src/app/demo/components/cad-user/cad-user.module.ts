import { CadUserComponent } from './cad-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CadUserRoutingModule } from './cad-user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CadUserComponent,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        CadUserRoutingModule
    ],
    declarations: [CadUserComponent]
})
export class DashboardModule { }
