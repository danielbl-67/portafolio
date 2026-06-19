import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent implements OnInit {
  datosContacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviando: boolean = false;
  enviadoExito: boolean = false;
  anioActual: number = 2026;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.anioActual = new Date().getFullYear();
  }

  enviarMensaje() {
    this.enviando = true;

    const payload = {
      access_key: 'd21208cb-ac0b-4ac9-82e9-9322d35b63c1',
      name: this.datosContacto.nombre,
      email: this.datosContacto.email,
      subject: `Portafolio: ${this.datosContacto.asunto}`,
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

        setTimeout(() => this.enviadoExito = false, 5000);
      },
      error: (err) => {
        this.enviando = false;
        alert('Hubo un error al enviar el mensaje. Por favor, utiliza el botón de WhatsApp o Email Directo.');
        console.error(err);
      }
    });
  }

}