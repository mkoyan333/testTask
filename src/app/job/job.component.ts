import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {NgIf} from "@angular/common";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonDirective} from "primeng/button";
import {FormDataService} from "../form-data.service";

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    DropdownModule,
    NgIf,
    InputTextareaModule,
    ButtonDirective
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  jobForm!: FormGroup;
  jobTypes: any[] | undefined;
  jobSources: any[] | undefined;

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {}

  jobType = [
    {label: 'Full-time', value: 'Full-time'},
    {label: 'Part-time', value: 'Part-time'},
    {label: 'Contract', value: 'Contract'}
  ]
  jobSource = [
    {label: 'Freelance', value: 'Freelance'},
    {label: 'Part-time', value: 'Part-time'},
    {label: 'Contract', value: 'Contract'},
    {label: 'Temporary', value: 'Temporary'}
  ]

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      jobType: ['',],
      jobSource: ['',],
      jobDescription: ['Job description (optional)']
    });
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      this.formDataService.setJobDetails(this.jobForm.value);
    }
  }
}
