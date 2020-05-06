import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import {WidgetComponent, WidgetComponent2, WidgetService } from 'widget-app-lib';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  componentRef: any;
  @ViewChild('loadComponent', {static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  private subscription: Subscription 
  constructor(private widgetService: WidgetService, private resolver: ComponentFactoryResolver, private widgetComponent: WidgetComponent, private widgetComponent2: WidgetComponent2) { }
  getMsgText:any = "";
  widgetSelector:any = 'enl-widget-app-lib2'
  widgetArr:any = [{
    "widgetSelector" : "enl-widget-app-lib",
    "widgetComponent" : ""
  },{
    "widgetSelector" : "enl-widget-app-lib2",
    "widgetComponent" : ""
  }]

  ngOnInit() {
    this.subscription = this.widgetService.getCurrentUserObjUpdated().subscribe(value => {
      console.log("value widget 1 receive back", value);
    });
    const factory = this.resolver.resolveComponentFactory(WidgetComponent2);
      this.componentRef = this.entry.createComponent(factory);
      const factory1 = this.resolver.resolveComponentFactory(WidgetComponent);
      this.componentRef = this.entry.createComponent(factory1);
  }
  
  getMsg() {
    this.widgetComponent.sayHi();
  }

  getMsg1() {
    this.getMsgText = this.widgetComponent2.sayHi();
  }
  
  transferValue () {
    this.widgetService.setCurrentUserObj({"username":"rprakashlive"})
  }

  receiveBack() {
    this.subscription = this.widgetService.getCurrentUserObjUpdated().subscribe(value => {
      console.log("value widget 1 receive back", value);
    });
  }

}
