import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  QueryList
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
  public dynComponents: QueryList<ViewContainerRef>;
  private subscription: Subscription 
  constructor(private widgetService: WidgetService, private resolver: ComponentFactoryResolver, private widgetComponent: WidgetComponent, private widgetComponent2: WidgetComponent2) { }
  getMsgText:any = "";
  widgetSelector:any = 'enl-widget-app-lib2'
  updatedArr:any = [];
  widgetArr:any = [{
    "widgetSelector" : "enl-widget-app-lib",
    "widgetComponent" : "WidgetComponent"
  },{
    "widgetSelector" : "enl-widget-app-lib2",
    "widgetComponent" : "WidgetComponent2"
  }]

   widgetClasses:any = {
    'WidgetComponent': WidgetComponent,
    'WidgetComponent2': WidgetComponent2        
}

widgetClassesArr:any = [WidgetComponent, WidgetComponent2]
component:any;
  ngOnInit() {
    this.component = [WidgetComponent, WidgetComponent2];
    this.updatedArr = [];
    this.subscription = this.widgetService.getCurrentUserObjUpdated().subscribe(value => {
      console.log("value widget 1 receive back", value);
    });

    this.widgetArr.forEach(element => {      
      const factory = this.resolver.resolveComponentFactory(this.widgetClasses[element.widgetComponent]);
      this.componentRef = this.entry.createComponent(factory);
      this.updatedArr.push(this.componentRef)
    });
    console.log("this.updatedArr",this.updatedArr)
    //  const factory = this.resolver.resolveComponentFactory(WidgetComponent2);
    //   this.componentRef = this.entry.createComponent(factory);
    //   const factory1 = this.resolver.resolveComponentFactory(WidgetComponent);
    //   this.componentRef = this.entry.createComponent(factory1);
  }
  
  getMsg() {
    this.widgetComponent.sayHi();
  }

  tplVar = 'some value';
  doSomething(event, tplValue) {
    console.log("event",event);
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

  changeCount(data) {
    console.log("app html says output emitter received from lib component", data);
  }

}
