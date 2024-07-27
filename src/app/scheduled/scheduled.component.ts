import { Component, OnInit } from '@angular/core';
import { CardModule } from "primeng/card";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CalendarModule } from "primeng/calendar";
import { NgIf } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { FormDataService } from "../form-data.service";

@Component({
  selector: 'app-scheduled',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    CalendarModule,
    NgIf,
    DropdownModule
  ],
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss'] // corrected the property name
})
export class ScheduledComponent implements OnInit {
  scheduledForm!: FormGroup;

  testSelectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.scheduledForm = this.fb.group({
      startDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      testSelect: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.scheduledForm.valid) {
      this.formDataService.setScheduledDetails(this.scheduledForm.value); // corrected this line
    }
  }
}
