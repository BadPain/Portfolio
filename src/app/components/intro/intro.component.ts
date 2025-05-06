import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    NgOptimizedImage,
    LanguageSwitcherComponent,
  ],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  activeLink: String = '';

  /**
   * Sets the active link to the provided link.
   * 
   * @param link - The link string to set as active.
   */
  setActive(link: string) {
    this.activeLink = link;
  }
  
  isHovered: boolean = false;
  isHoveredMail: boolean = false;
  isHoveredLinkedin: boolean = false;
  isHoveredGitHub: boolean = false;
  isMenuOpen: boolean = false;

  constructor() {}
}
