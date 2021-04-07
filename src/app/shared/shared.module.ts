import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder-directive/placeholder.directive';
import { CommonModule } from '@angular/common';

@NgModule ({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents: [AlertComponent]

})
export class SharedModule {}