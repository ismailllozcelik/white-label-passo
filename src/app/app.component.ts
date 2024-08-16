import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'White-label Counter App';
  brandName = 'Default Brand';
  count = 0;
  themeStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    textAlign: 'center',
  };

  ngOnInit() {
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    
    if (hostname.includes('gs')) {
      this.setupForGs();
    } else if (hostname.includes('bjk')) {
      this.setupForBjk();
    }
  }

  setupForGs() {
    this.brandName = 'Galatasaray';
    this.themeStyle = {
      backgroundColor: 'red',
      color: 'yellow',
      padding: '20px',
      textAlign: 'center',
    };
  }

  setupForBjk() {
    this.brandName = 'Beşiktaş';
    this.themeStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
    };
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}