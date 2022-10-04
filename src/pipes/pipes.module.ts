import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNsortPipe } from './filterNsort/filterNsort.pipe';



@NgModule({
    declarations: [
        FilterNsortPipe
    ],
    exports: [
        FilterNsortPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
