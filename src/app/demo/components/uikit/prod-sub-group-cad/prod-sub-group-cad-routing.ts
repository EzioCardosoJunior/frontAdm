import { ProdSubGroupCadComponent } from './prod-sub-group-cad.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/demo/adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProdSubGroupCadComponent }
    ])],
    exports: [RouterModule]
})
export class ProdSubGroupCadRoutingModule { }

