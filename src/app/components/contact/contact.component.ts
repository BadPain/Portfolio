import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;

  onSubmit() {
    if (!this.privacyAccepted) {
      alert('Bitte bestätige die Datenschutzbestimmungen.');
      return;
    }

    const payload = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.http.post('/portfolio/kontakt.php', payload).subscribe({
      next: () => {
        alert('Danke für deine Nachricht!');
        this.name = '';
        this.email = '';
        this.message = '';
        this.privacyAccepted = false;
      },
      error: () => {
        alert('Fehler beim Senden. Bitte versuche es später erneut.');
      },
    });
  }

  /**
   * Smoothly scrolls to the top of the page.
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  constructor(private http: HttpClient) {}
}
