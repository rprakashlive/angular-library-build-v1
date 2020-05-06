import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  
  constructor(private http: HttpClient) { }

  private currentUserObj = new BehaviorSubject({});
  private currentUserObjUpdated = new BehaviorSubject({});

  getCurrentUserObj(): Observable<any> {
    return this.currentUserObj.asObservable();
  }

  getCurrentUserValue(): any {
    return this.currentUserObj.getValue();
  }
  
  setCurrentUserObj(val) {
    this.currentUserObj.next(val);
  }


  setCurrentUserObjUpdated(val) {
    this.currentUserObjUpdated.next(val);
  }

  
  getCurrentUserValueUpdated(): any {
    return this.currentUserObjUpdated.getValue();
  }
  
  getCurrentUserObjUpdated(): Observable<any> {
    return this.currentUserObjUpdated.asObservable();
  }













}

