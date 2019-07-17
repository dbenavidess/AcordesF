import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  exports: [MatButtonModule,MatToolbarModule, MatMenuModule, MatIconModule,
            MatCheckboxModule, BrowserAnimationsModule,MatDividerModule,MatGridListModule,
          MatExpansionModule, MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
  imports: [MatButtonModule,MatToolbarModule, MatMenuModule, MatIconModule,
            MatCheckboxModule, BrowserAnimationsModule,MatDividerModule,MatGridListModule,
          MatExpansionModule, MatListModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule],
})
export class materialCompo { }