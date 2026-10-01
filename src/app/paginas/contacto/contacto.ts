import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent implements OnInit {
  private http = inject(HttpClient);

  datosContacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviando: boolean = false;
  enviadoExito: boolean = false;
  anioActual: number = 2026;

  ngOnInit(): void {
    this.anioActual = new Date().getFullYear();
  }

  enviarMensaje(): void {
    if (!this.datosContacto.nombre || !this.datosContacto.email) {
      return;
    }

    this.enviando = true;

    const payload = {
      access_key: 'd21208cb-ac0b-4ac9-82e9-9322d35b63c1',
      name: this.datosContacto.nombre,
      email: this.datosContacto.email,
      subject: `Portafolio: ${this.datosContacto.asunto || 'Nuevo Contacto'}`,
      message: this.datosContacto.mensaje
    };

    this.http.post('https://api.web3forms.com/submit', payload).subscribe({
      next: () => {
        this.enviando = false;
        this.enviadoExito = true;

        this.datosContacto = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        };

        setTimeout(() => (this.enviadoExito = false), 5000);
      },
      error: (err) => {
        this.enviando = false;
        alert('Hubo un error al enviar el mensaje. Por favor, utiliza el botón de WhatsApp o Email Directo.');
        console.error(err);
      }
    });
  }
}