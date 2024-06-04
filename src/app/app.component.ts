import {Component, inject} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {ActivatedRoute, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  location = inject(Location);
  title = 'fala-tu';

  constructor() {
    sessionStorage.setItem('auth', '')
  }

  isShowHeader(): boolean {
    return !(this.location.path().includes('register') || this.location.path().includes('login'));
  }
}
