import { Component } from '@angular/core';
import {WidgetComponent, WidgetComponent2 } from 'widget-app-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private widgetComponent: WidgetComponent, private widgetComponent2: WidgetComponent2) { }
  getMsgText:any = "";
  ngOnInit() {
  }
  
  getMsg() {
    this.widgetComponent.sayHi();
  }

  getMsg1() {
    this.getMsgText = this.widgetComponent2.sayHi();
  }
  

}
