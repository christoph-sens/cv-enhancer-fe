import {Component} from '@angular/core';
import {CvService} from '../service/cv.service';
import {Observable} from 'rxjs';
import {CvResponse} from '../service/dto/cvresponse';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  constructor(private cvService: CvService) {
  }

  response$!: Observable<CvResponse>;
  formGroup = new FormGroup({
    cv: new FormControl(''),
    vacancy: new FormControl(''),
  })

  onSubmit() {
    const cv = this.formGroup.value.cv
    const vacancy = this.formGroup.value.vacancy
    this.response$ = this.cvService.getFeedback(cv!, vacancy!)
  }
}
