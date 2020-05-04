import { Component } from '@angular/core';

@Component({
  selector: "enl-widget-app-lib",
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  givenString:any = "";
  
  sayHi(){
    this.givenString = "library bind test"
    alert("Hello World!!!");
  }
}
