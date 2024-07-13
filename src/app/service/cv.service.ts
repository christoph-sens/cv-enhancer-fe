import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {CvResponse} from './dto/cvresponse';

@Injectable({
  providedIn: 'root'
})

export class CvService {

  constructor(private httpClient: HttpClient) {
  }

  getTranslation(languageCode: string, countryCode: string, cv: string): Observable<CvResponse> {
    const url = "/api/cv/translate/" + languageCode + "/" + countryCode
    return this.httpClient.post<CvResponse>(url, cv)
  }

  getEnhancement(cv: string): Observable<CvResponse> {
    return this.httpClient.post<CvResponse>("/api/cv/improve", cv)
  }

  getFeedback(cv: string, vacancy: string): Observable<CvResponse> {
    return this.httpClient.post<CvResponse>("/api/cv/compare-with-vacancy", {cv: cv, vacancy: vacancy})
  }

  getCoverLetter(cv: string, vacancy: string): Observable<CvResponse> {
    return this.httpClient.post<CvResponse>("/api/cv/create-cover-letter", {cv: cv, vacancy: vacancy})
  }


}
