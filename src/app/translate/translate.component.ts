import {Component, signal} from '@angular/core';
import {codes} from 'iso-language-codes';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CC_TO_NATIVE_NAME, LC_TO_CCS} from './constant';
import {CvService} from "../service/cv.service";
import {Observable} from "rxjs";
import {CvResponse} from "../service/dto/cvresponse";

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {
  
  constructor(private cvService : CvService) {
  }

  response$ : Observable<CvResponse> | undefined;
  languages = signal([{label: "", value: ""}].concat(codes.map(code => ({
    label: code.nativeName,
    value: code.iso639_1
  })).sort((a, b) => a.label.localeCompare(b.label))));
  countries = signal([{label: "", value: ""}])

  formGroup = new FormGroup({
    languageCode: new FormControl(''),
    countryCode: new FormControl(''),
    cv: new FormControl(''),
  })

  onChangeLanguage() {
    const selectedLanguageCode = this.formGroup.value.languageCode
    const ccs = LC_TO_CCS[selectedLanguageCode!]
    const optionList: { label: string; value: string; }[] = [{label: "", value: ""}]
    ccs?.forEach(cc => {
      if (CC_TO_NATIVE_NAME[cc]) {
        optionList.push({label: CC_TO_NATIVE_NAME[cc], value: cc})
      }
    })
    this.countries.set(optionList)
  }

  onSubmit() {
    const lc = this.formGroup.value.languageCode
    const cc = this.formGroup.value.countryCode
    const cv = this.formGroup.value.cv
    this.response$ = this.cvService.getTranslation(lc!, cc!, cv!)
  }


}
