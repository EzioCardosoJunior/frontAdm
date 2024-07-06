import { ProdGroupListComponent } from './prod-group-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/demo/adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProdGroupListComponent }
    ])],
    exports: [RouterModule]
})
export class ProdGroupListRoutingModule {

    
 }

