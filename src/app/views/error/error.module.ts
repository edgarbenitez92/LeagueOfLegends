import { NgModule } from '@angular/core';
import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [ErrorRoutingModule, SharedModule, NotFoundComponent],
})
export class ErrorModule {}
