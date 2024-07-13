import {Component} from '@angular/core';
import { CvService } from '../service/cv.service';
import { Observable } from 'rxjs';
import { CvResponse } from '../service/dto/cvresponse';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-improve',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './improve.component.html',
  styleUrl: './improve.component.css'
})
export class ImproveComponent {
  constructor(private cvService: CvService) {
  }

  response$!: Observable<CvResponse>;
  

  formGroup = new FormGroup({
    cv: new FormControl(''),
  })
  onSubmit() {
    const cv = this.formGroup.value.cv
    this.response$ = this.cvService.getEnhancement(cv!)
  }
}
