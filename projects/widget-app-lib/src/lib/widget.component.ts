import { Component, Output , EventEmitter} from '@angular/core';
import { environment } from '../environments/environment';
import * as moment_ from 'moment';
const moment = moment_;
import { ToastrManager } from 'ng6-toastr-notifications';
import { Subscription } from 'rxjs/Subscription';
import {WidgetService} from './widget.service';

@Component({
  selector: "enl-widget-app-lib",
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  givenString:any = "";
  userObj:any = {};
  @Output() widget_display = new EventEmitter();
  private subscription: Subscription 
  constructor(private toastr: ToastrManager, private widgetService: WidgetService) {}

  ngOnInit() {
  this.subscription = this.widgetService.getCurrentUserObj().subscribe(value => {
    console.log("value widget 1", value);
    value['address'] = "gobi";
    this.userObj = value;
    this.widgetService.setCurrentUserObjUpdated(this.userObj);
    this.widget_display.emit(this.userObj);
  });
  }
  sayHi(){

    console.log("environment",environment);
    console.log("moment", moment().format("YYYY-MM-DD"));
    this.givenString = "library bind test"
    this.toastr.successToastr(' Category Created Successfully !', 'Success');
  }
}
