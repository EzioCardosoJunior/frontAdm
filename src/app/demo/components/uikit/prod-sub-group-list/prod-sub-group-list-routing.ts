import { ProdSubGroupListComponent } from './prod-sub-group-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/demo/adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProdSubGroupListComponent }
    ])],
    exports: [RouterModule]
})
export class ProdSubGroupListRoutingModule { }

