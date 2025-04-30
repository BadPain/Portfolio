import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule, CommonModule, NgOptimizedImage],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  isHovered: boolean = false;
  isHoveredMail: boolean = false;
  isHoveredLinkedin: boolean = false;
  isHoveredGitHub: boolean = false;
  isMenuOpen: boolean = false;

  constructor() {}
}
