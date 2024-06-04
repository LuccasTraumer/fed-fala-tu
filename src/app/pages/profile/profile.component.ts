import { Component } from '@angular/core';
import {ProfileModel} from "./profile-model";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user!: ProfileModel;

  constructor() {
    this.user = {
      image: 'https://scontent.fcpq7-1.fna.fbcdn.net/v/t39.30808-6/384756400_6532805303471650_5215351256827022721_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9ZGUx3uYJH69Ml106sJ2BDnGmj4eKbc8OcaaPh4ptz89HWsGmZcRZIO7zBHc97E6JHG5wyFO-9EU6JHWr6IrL&_nc_ohc=YSr1EgjQOqQQ7kNvgG19_VU&_nc_ht=scontent.fcpq7-1.fna&oh=00_AYDYh1cUbgdVpPALbSbj52E7D7Xv43RDejdoEzQGMW1nYQ&oe=6664CDE4',
      nome: `Lucas Jesus`,
      username: `lucassj`,
      email: `lucassj.dev@gmail.com`,
      links: [`https://instagram.com/luccastraumer`, `https://luccastraumer.github.io`]
    }
  }

  goToSettings() {

  }
}

