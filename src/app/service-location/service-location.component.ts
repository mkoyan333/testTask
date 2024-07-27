import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {ButtonDirective} from "primeng/button";
import {FormDataService} from "../form-data.service";

@Component({
  selector: 'app-service-location',
  standalone: true,
  imports: [
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    NgIf,
    DropdownModule,
    ButtonDirective
  ],
  templateUrl: './service-location.component.html',
  styleUrl: './service-location.component.scss'
})
export class ServiceLocationComponent {
  serviceForm!: FormGroup;

  areas = [
    { label: 'Urban', value: 'urban' },
    { label: 'Suburban', value: 'suburban' },
    { label: 'Rural', value: 'rural' }
  ];

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      area: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      this.formDataService.setServiceLocation(this.serviceForm.value);
    }
  }
}
