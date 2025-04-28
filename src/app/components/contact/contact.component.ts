import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
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
    console.log(
      'Kontaktformular gesendet:',
      this.name,
      this.email,
      this.message
    );
    alert('Danke für deine Nachricht!');
    this.name = '';
    this.email = '';
    this.message = '';
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
