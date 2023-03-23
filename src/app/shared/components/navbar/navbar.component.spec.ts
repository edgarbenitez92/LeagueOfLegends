import { Overlay } from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './navbar.component';
import { translateModuleConfig } from 'src/app/core/configs/translate-module.config';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';

// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;
//   let sidenav: MatSidenav;

//   beforeEach(async () => {
//     let opened: boolean = component.sidenav.opened;

//     await TestBed.configureTestingModule({
//       declarations: [NavbarComponent],
//       imports: [MatDialogModule, TranslateModule.forRoot(translateModuleConfig), HttpClientModule],
//       schemas: [NO_ERRORS_SCHEMA]
//     }).compileComponents();

//     fixture = TestBed.createComponent(NavbarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
