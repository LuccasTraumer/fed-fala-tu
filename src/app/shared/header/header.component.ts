import {Component, inject} from '@angular/core';
import {MatMenu} from "@angular/material/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        MatMenu
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router: Router = inject(Router);

  goToHome() {
    this.router.navigate([''])
  }

  goToProfile() {
    this.router.navigate([`profile`]);
  }
}
