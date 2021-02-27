import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ui-lib-header',
    templateUrl: './ui-lib-header.component.html',
    styleUrls: ['./ui-lib-header.component.scss']
})
export class UiLibraryHeaderComponent implements OnInit {
    @Input() showHeader: boolean = true;
    ngOnInit(): void { }
}
