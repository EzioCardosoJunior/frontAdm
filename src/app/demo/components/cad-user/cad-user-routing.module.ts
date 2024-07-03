import { CadUserComponent } from './cad-user.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CadUserComponent }
    ])],
    exports: [RouterModule]
})
export class CadUserRoutingModule { }
