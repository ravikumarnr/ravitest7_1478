import { Component, OnInit } from '@angular/core';
import { Screen933140Service } from './screen933140.service.ts';

@Component({
  selector: 'app-screen933140',
  templateUrl: './screen933140.component.html',
  styleUrls: ['./screen933140.component.scss'],
})

export class Screen933140Component implements OnInit {
    public email = {
        name: '',
        email: '',
    }

    constructor (
        private screen933140Service: Screen933140Service,
    ) { }

    ngOnInit() {
    }
}