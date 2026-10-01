import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent {
  // Clave pública de Web3Forms
  private readonly ACCESS_KEY = 'TU_ACCESS_KEY_AQUI';

  datosContacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  readonly enviando = signal<boolean>(false);
  readonly enviadoExito = signal<boolean>(false);
  readonly errorEnvio = signal<boolean>(false);

  async enviarMensaje(): Promise<void> {
    this.enviando.set(true);
    this.errorEnvio.set(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.ACCESS_KEY,
          name: this.datosContacto.nombre,
          email: this.datosContacto.email,
          subject: this.datosContacto.asunto,
          message: this.datosContacto.mensaje
        })
      });

      const resultado = await response.json();

      if (resultado.success) {
        this.enviadoExito.set(true);
        this.datosContacto = { nombre: '', email: '', asunto: '', mensaje: '' };
      } else {
        this.errorEnvio.set(true);
      }
    } catch {
      this.errorEnvio.set(true);
    } finally {
      this.enviando.set(false);
    }
  }
}