import { Component } from '@angular/core';

@Component({
  selector: "enl-widget-app-lib2",
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent2 {
  givenString:any = "";
  
  sayHi(){
    return this.givenString = "response test"
  }
}
