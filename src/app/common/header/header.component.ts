import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';;
import { Router, ActivatedRoute } from '@angular/router';
import {LocalStorageService} from '../../shared/services/localStorageService';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    public hiddenHeader: boolean = true;
    public headerValue: any;
    constructor(private router: Router,
        private localStorage: LocalStorageService,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    ngAfterContentChecked() {
        this.headerValue = this.localStorage.getKey('admin');
        this.setHeader();
    }

    setHeader() {
        if (this.headerValue != null) {
            this.hiddenHeader = false;
        }
        else {
            this.hiddenHeader = true;
        }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login'], { relativeTo: this.activeRoute });
        this.hiddenHeader = true;
        this.headerValue = null;
    }

}
