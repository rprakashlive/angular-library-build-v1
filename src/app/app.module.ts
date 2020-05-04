import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injector} from '@angular/core';
import { AppComponent } from './app.component';
import { WidgetLibModule, WidgetComponent, WidgetComponent1, WidgetComponent2 } from 'widget-app-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WidgetLibModule
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
