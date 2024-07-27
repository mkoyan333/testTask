import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {ClientDetailsComponent} from "./client-details/client-details.component";
import {JobComponent} from "./job/job.component";
import {ServiceLocationComponent} from "./service-location/service-location.component";
import {ScheduledComponent} from "./scheduled/scheduled.component";
import {ButtonDirective} from "primeng/button";
import {FormDataService} from "./form-data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClientDetailsComponent, JobComponent, ServiceLocationComponent, ScheduledComponent, ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(ClientDetailsComponent) clientDetailsComponent!: ClientDetailsComponent;
  @ViewChild(JobComponent) jobDetailsComponent!: JobComponent;
  @ViewChild(ServiceLocationComponent) serviceLocationComponent!: ServiceLocationComponent;
  @ViewChild(ScheduledComponent) scheduledComponent!: ScheduledComponent;

  clientDetails: any;
  jobDetails: any;
  serviceLocation: any;
  scheduledDetails: any;

  constructor(private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.formDataService.clientDetails$.subscribe(data => this.clientDetails = data);
    this.formDataService.jobDetails$.subscribe(data => this.jobDetails = data);
    this.formDataService.serviceLocation$.subscribe(data => this.serviceLocation = data);
    this.formDataService.scheduledDetails$.subscribe(data => this.scheduledDetails = data);
  }

  createJob() {
    this.clientDetailsComponent.onSubmit();
    this.jobDetailsComponent.onSubmit();
    this.serviceLocationComponent.onSubmit();
    this.scheduledComponent.onSubmit();

    console.log('Creating Job with:', {
      clientDetails: this.clientDetails,
      jobDetails: this.jobDetails,
      serviceLocation: this.serviceLocation,
      scheduledDetails: this.scheduledDetails
    });
  }

  saveInfo() {
    this.clientDetailsComponent.onSubmit();
    this.jobDetailsComponent.onSubmit();
    this.serviceLocationComponent.onSubmit();
    this.scheduledComponent.onSubmit();

    console.log('Saving Info with:', {
      clientDetails: this.clientDetails,
      jobDetails: this.jobDetails,
      serviceLocation: this.serviceLocation,
      scheduledDetails: this.scheduledDetails
    });
  }
}
