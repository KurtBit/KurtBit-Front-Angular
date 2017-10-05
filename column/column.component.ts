import { Component, Input } from '@angular/core';

@Component({
    selector: 'Column',
    template: `
        <div class="col-{{type}}-{{size}} col-{{type}}-offset-{{offset}}">
            <ng-content></ng-content>
        </div>
    `
})
export class ColumnComponent {
    @Input() public size : number = 12;
    @Input() public offset : number = 0;
    @Input() public type : string = 'md';
}