import {Component} from '@angular/core';
import { CvService } from '../service/cv.service';
import { CvResponse } from '../service/dto/cvresponse';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cover-letter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cover-letter.component.html',
  styleUrl: './cover-letter.component.css'
})
export class CoverLetterComponent {
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
    this.response$ = this.cvService.getCoverLetter(cv!, vacancy!)
  }
}
