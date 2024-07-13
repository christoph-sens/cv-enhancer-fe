import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MenubarModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'application-app';
  items!: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Translate',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/translate']);
        },
      },
      {
        label: 'Enhance',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/improve']);
        },
      },
      {
        label: 'Compare with Vacancy',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/vacancy']);
        },
      },
      {
        label: 'Create Cover Letter',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/cover-letter']);
        }
      },
    ];
  }
}
