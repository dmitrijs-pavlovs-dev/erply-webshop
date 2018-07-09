import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatPaginatorModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSelectModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDividerModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class MaterialModule {}
