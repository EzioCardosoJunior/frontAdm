import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadUserComponent } from './cad-user.component';
import { authGuard } from 'src/app/demo/adonisServices/auth.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CadUserComponent }
    ])],
    exports: [RouterModule]
})
export class CadUserRoutingModule { }

