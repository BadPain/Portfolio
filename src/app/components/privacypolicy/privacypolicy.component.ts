import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitcherComponent],
  template: `
    <section class="privacy-policy privacy-mode">
      <h1>{{ 'PRIVACY.TITLE' | translate }}</h1>
      <div class="back-button-wrapper">
        <button class="back-button" (click)="goBack()">
          {{ 'PRIVACY.BACK' | translate }}
        </button>
      </div>
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
        <li>{{ 'PRIVACY.LOG_FILES_IP' | translate }}</li>
        <li>{{ 'PRIVACY.LOG_FILES_DATE' | translate }}</li>
        <li>{{ 'PRIVACY.LOG_FILES_BROWSER' | translate }}</li>
        <li>{{ 'PRIVACY.LOG_FILES_OS' | translate }}</li>
      </ul>
      <p>{{ 'PRIVACY.LOG_FILES_TEXT_2' | translate }}</p>

      <h2>{{ 'PRIVACY.SECTIONS.RIGHTS' | translate }}</h2>
      <p>{{ 'PRIVACY.RIGHTS_INTRO' | translate }}</p>
      <ul>
        <li>{{ 'PRIVACY.RIGHTS_ACCESS' | translate }}</li>
        <li>{{ 'PRIVACY.RIGHTS_CORRECTION' | translate }}</li>
        <li>{{ 'PRIVACY.RIGHTS_DELETION' | translate }}</li>
        <li>{{ 'PRIVACY.RIGHTS_LIMITATION' | translate }}</li>
        <li>{{ 'PRIVACY.RIGHTS_OBJECTION' | translate }}</li>
        <li>{{ 'PRIVACY.RIGHTS_TRANSFER' | translate }}</li>
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
