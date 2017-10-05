import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnComponent } from './column/column.component';
import { GlyphiconComponent } from './glyphicon/glyphicon.component';
import { NavbarComponent} from './navbar/navbar.component';
import { RowComponent } from './row/row.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColumnComponent,
    GlyphiconComponent,
    NavbarComponent,
    RowComponent
  ],
  exports: [
    ColumnComponent,
    GlyphiconComponent,
    NavbarComponent,
    RowComponent
  ]
})
export class KurtbitFrontAngularModule { }
