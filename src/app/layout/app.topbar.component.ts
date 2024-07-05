import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../demo/adonisServices/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    menuHeaderItems: MenuItem[] = [];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private authService: AuthService, private router: Router) {

        this.menuHeaderItems = [
            {
                label: 'Perfil',
                icon: 'pi pi-fw pi-check'
            },

            {
                separator: true
            },
            {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                command: () => this.logout()
            },
        ];
    }

    logout() {
        console.log('Logout clicado');
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }



}
