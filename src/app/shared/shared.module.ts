import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiniIconsChampionsComponent } from './components/mini-icons-champions/mini-icons-champions.component';
import { SplashChampionComponent } from './components/splash-champion/splash-champion.component';

import { NgxSpinnerModule } from 'ngx-spinner';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyPaginatorIntl as MatPaginatorIntl, MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyTooltipModule as MatTooltipModule, MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS as MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/legacy-tooltip';
import { CustomTooltipConfig } from './custom/custom-tooltip-config';
import { RouterModule } from '@angular/router';
import { ImageSplashPipe } from './pipe/image-splash.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { LazyLoadingImgDirective } from './directives/lazy-loading-img.directive';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './components/footer/footer.component';
import { AppSettingsDialogComponent } from './components/app-settings-dialog/app-settings-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    SidenavComponent,
    NavbarComponent,
    MiniIconsChampionsComponent,
    SplashChampionComponent,
    AppSettingsDialogComponent,
    SnackBarComponent,
    // Pipes
    ImageSplashPipe,
    // Directives
    LazyLoadingImgDirective,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    SwiperModule,
    TranslateModule,
    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatGridListModule,
  ],
  exports: [
    // Components
    SidenavComponent,
    NavbarComponent,
    MiniIconsChampionsComponent,
    SplashChampionComponent,
    FooterComponent,
    SnackBarComponent,
    AppSettingsDialogComponent,
    // Modules
    CommonModule,
    RouterModule,
    // Pipes
    ImageSplashPipe,
    // Libraries
    NgxSpinnerModule,
    SwiperModule,
    TranslateModule,
    // Directives
    LazyLoadingImgDirective,
    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatGridListModule,
    MatButtonToggleModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // {
    //   provide: MatPaginatorIntl,
    //   useClass: CustomMatPaginatorIntl,
    // },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: CustomTooltipConfig },
  ],
})
export class SharedModule {}
