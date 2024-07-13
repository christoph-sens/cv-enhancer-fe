import { Routes } from '@angular/router';
import {TranslateComponent} from "./translate/translate.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {CoverLetterComponent} from "./cover-letter/cover-letter.component";
import {ImproveComponent} from "./improve/improve.component";

export const routes: Routes = [
  { path: 'translate', component: TranslateComponent },
  { path: 'improve', component: ImproveComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'cover-letter', component: CoverLetterComponent },
  { path: '**', redirectTo: 'translate' }
];
