import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, SharedModule, HttpClientModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
