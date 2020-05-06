import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule , Injector} from '@angular/core';
import { WidgetComponent } from './lib/widget.component';
import { WidgetComponent1 } from './lib1/widget.component';
import { WidgetComponent2 } from './lib2/widget.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetComponent1,
    WidgetComponent2
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [],
  exports:[
    WidgetComponent,
    WidgetComponent1,
    WidgetComponent2
  ],
  entryComponents: [WidgetComponent, WidgetComponent1,WidgetComponent2]

})
export class WidgetLibModule {}
