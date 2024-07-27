import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private clientDetailsSource = new BehaviorSubject<any>({});
  private jobDetailsSource = new BehaviorSubject<any>({});
  private serviceLocationSource = new BehaviorSubject<any>({});
  private scheduledDetailsSource = new BehaviorSubject<any>({});

  clientDetails$ = this.clientDetailsSource.asObservable();
  jobDetails$ = this.jobDetailsSource.asObservable();
  serviceLocation$ = this.serviceLocationSource.asObservable();
  scheduledDetails$ = this.scheduledDetailsSource.asObservable();

  setClientDetails(data: any) {
    this.clientDetailsSource.next(data);
  }

  setJobDetails(data: any) {
    this.jobDetailsSource.next(data);
  }

  setServiceLocation(data: any) {
    this.serviceLocationSource.next(data);
  }

  setScheduledDetails(data: any) {
    this.scheduledDetailsSource.next(data);
  }
}
