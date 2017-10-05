import { Component } from '@angular/core';

@Component({
    selector: 'Row',
    template: `
        <div class="row">
            <ng-content></ng-content>
        </div>
    `
})
export class RowComponent {}