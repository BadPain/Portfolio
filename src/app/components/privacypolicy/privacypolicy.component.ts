import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LanguageSwitcherComponent,
    FooterComponent,
  ],
  template: `
    <div class="privacyScrollWrapper">
      <section class="privacy-policy privacy-mode">
        <header class="privacyHeader">
          <div class="privacyHeaderContent">
            <a routerLink="/" class="logoLink">
              <img src="assets/img/logo/LogoIcon.svg" alt="Logo" />
              <span class="privacyName">F. Irving</span>
            </a>
            <button class="back-button" (click)="goBack()">
              {{ 'PRIVACY.BACK' | translate }}
            </button>
          </div>
        </header>
        <h1>{{ 'PRIVACY.TITLE' | translate }}</h1>
        <div class="back-button-wrapper"></div>
        <p>
          <strong>{{ 'PRIVACY.LAST_UPDATED' | translate }}</strong>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.RESPONSIBLE' | translate }}</h2>
        <p>
          Florian Irving<br />
          E-Mail:
          <a href="mailto:mail@irving.contact">mail&#64;irving.contact</a>
        </p>
        <app-language-switcher></app-language-switcher>
        <h2>{{ 'PRIVACY.SECTIONS.DATA_COLLECTION' | translate }}</h2>
        <p>{{ 'PRIVACY.DATA_COLLECTION_TEXT_1' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.CONTACT_FORM' | translate }}</h2>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_1' | translate }}</p>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_2' | translate }}</p>
        <p>{{ 'PRIVACY.CONTACT_FORM_TEXT_3' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.LOG_FILES' | translate }}</h2>
        <p>{{ 'PRIVACY.LOG_FILES_TEXT_1' | translate }}</p>
        <ul>
          <p>{{ 'PRIVACY.LOG_FILES_IP' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_DATE' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_BROWSER' | translate }}</p>
          <p>{{ 'PRIVACY.LOG_FILES_OS' | translate }}</p>
        </ul>
        <p>{{ 'PRIVACY.LOG_FILES_TEXT_2' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.RIGHTS' | translate }}</h2>
        <p>{{ 'PRIVACY.RIGHTS_INTRO' | translate }}</p>
        <ul>
          <p>{{ 'PRIVACY.RIGHTS_ACCESS' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_CORRECTION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_DELETION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_LIMITATION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_OBJECTION' | translate }}</p>
          <p>{{ 'PRIVACY.RIGHTS_TRANSFER' | translate }}</p>
        </ul>
        <p>
          {{ 'PRIVACY.RIGHTS_CONTACT' | translate }}
          <a href="mailto:mail@irving.contact">mail&#64;irving.contact</a>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.REVOCATION' | translate }}</h2>
        <p>
          {{ 'PRIVACY.REVOCATION_TEXT' | translate }}
          <a href="mailto:mail@irving.contact">mail&#64;irving.contact</a>
        </p>

        <h2>{{ 'PRIVACY.SECTIONS.SECURITY' | translate }}</h2>
        <p>{{ 'PRIVACY.SECURITY_TEXT' | translate }}</p>

        <h2>{{ 'PRIVACY.SECTIONS.HOSTING' | translate }}</h2>
        <p>{{ 'PRIVACY.HOSTING_TEXT' | translate }}</p>
      </section>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./privacypolicy.component.scss'],
})
export class PrivacyPolicyComponent {
  ngOnInit(): void {
    document.body.classList.add('privacy-mode');
  }
  ngOnDestroy(): void {
    document.body.classList.remove('privacy-mode');
  }
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['https://www.irving-webdev.de/portfolio/browser/']);
  }
}
