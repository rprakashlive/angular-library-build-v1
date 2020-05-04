import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Injector} from '@angular/core';
import { WidgetComponent } from './lib/widget.component';
import { WidgetComponent1 } from './lib1/widget.component';
import { WidgetComponent2 } from './lib2/widget.component';
@NgModule({
  declarations: [
    WidgetComponent,
    WidgetComponent1,
    WidgetComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports:[
    WidgetComponent,
    WidgetComponent1,
    WidgetComponent2
  ]
})
export class WidgetLibModule {}
