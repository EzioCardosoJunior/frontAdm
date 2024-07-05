import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { authGuard } from '../../adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent, canActivate: [authGuard]  }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
