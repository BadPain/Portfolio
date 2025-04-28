import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.get('CERTIFICATES.LIST').subscribe(data => this.certificates = data);
  }
}
