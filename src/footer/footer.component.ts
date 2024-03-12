import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contador: number = 33;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.contador++;
    }, 1500);
  }
}
