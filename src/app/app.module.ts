import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injector} from '@angular/core';
import { AppComponent } from './app.component';
import { WidgetLibModule, WidgetComponent, WidgetComponent1, WidgetComponent2 } from 'widget-app-lib';
import { DynamicComponentModule, DynamicIoModule  } from 'ng-dynamic-component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetLibModule,
    DynamicComponentModule,
    DynamicIoModule
  ],
  providers: [
    WidgetComponent,
    WidgetComponent1,
    WidgetComponent2
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
