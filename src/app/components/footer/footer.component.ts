import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isHovered: boolean = false;
  isHoveredMail: boolean = false;
  isHoveredLinkedin: boolean = false;
  isHoveredGitHub: boolean = false;

  year = new Date().getFullYear();

  constructor(public translate: TranslateService) {}
}
