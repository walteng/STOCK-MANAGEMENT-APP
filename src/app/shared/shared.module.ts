import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent} from 'src/app/shared/star.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
