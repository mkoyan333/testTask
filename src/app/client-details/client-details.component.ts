import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ButtonDirective} from "primeng/button";
import {FormDataService} from "../form-data.service";

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    NgIf,
    ButtonDirective
  ],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['']
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      this.formDataService.setClientDetails(this.clientForm.value);
    }
  }

}
