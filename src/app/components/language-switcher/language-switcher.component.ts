import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  currentLang: string;

  /**
   * @description
   * The constructor sets the initial language to either the one set by the user or 'de' as a default.
   * @param translate The TranslateService is used to get the current language if it has already been set.
   */
  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'de';
  }

  /**
   * @description
   * The toggleClass getter returns a class list for the language toggle element.
   * Depending on the current language, it either returns 'language-toggle de' or 'language-toggle en'.
   * This class list is used in the template to style the language toggle element differently for each language.
   * @returns a class list for the language toggle element.
   */
  get toggleClass(): string {
    return this.currentLang === 'de'
      ? 'language-toggle de'
      : 'language-toggle en';
  }

  /**
   * @description
   * The toggleLanguage function toggles the current language between 'de' and 'en'.
   * It uses the TranslateService to set the current language.
   */
  toggleLanguage() {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
    this.translate.use(this.currentLang);
  }
}
