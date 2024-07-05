import { ProdGroupCadComponent } from './prod-group-cad.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/demo/adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProdGroupCadComponent }
    ])],
    exports: [RouterModule]
})
export class ProdGroupCadRoutingModule {

    
 }

