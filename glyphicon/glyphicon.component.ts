import { Component, Input } from '@angular/core';

@Component({
    selector: 'Glyphicon',
    template: `
        <span 
            class="glyphicon glyphicon-{{icon}}" 
            [ngStyle]="
                (size === 'xs' && { fontSize: '0.5em'}) ||
                (size === 'md' && { fontSize: '1em'}) ||
                (size === 'lg' && { fontSize: '1.5em'}) ||
                (size === 'xl' && { fontSize: '2em'})
            ">
        </span>
    `,
    styleUrls: []
})
export class GlyphiconComponent {
    @Input() public icon: string;
    @Input() public size: string;
}