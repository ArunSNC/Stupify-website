import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.css']
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    focus: any;
    focus1: any;
    focus2: any;
    active: boolean = true;
    date: { year: number, month: number };
    model: NgbDateStruct;
    constructor(private renderer: Renderer) { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        this.Activate();
    }
    count = 0;
    turn = 0;
    data: String;
    flg_1: boolean;
    flg_2: boolean;
    list = ['Opensource', 'Automation', 'Products','Services'];
    public Activate(): void {
        if (this.turn === this.list.length) {
            this.turn = 0;
        }
        this.data = this.list[this.turn];
        if (this.count % 2 === 1) {
            this.active = false;
            this.count = this.count + 1;
            this.flg_1 = true;
            setTimeout(() => {
                this.Activate();
            }, 5000);
        }
        else if (this.count % 2 === 0) {
            this.active = true;
            this.count = this.count + 1;
            this.flg_2 = true;
            setTimeout(() => {
                this.Activate();
            }, 5000);
        }
        if (this.flg_1 && this.flg_2) {
            this.turn = this.turn + 1;
            this.flg_1 = false;
            this.flg_2 = false;
        }
        console.log(this.count);
    }
}
