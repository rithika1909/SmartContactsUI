import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smartcontracts';
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
 
  isPinned: boolean = true; // Initial state, assuming the sidenav is pinned by default
 
  togglePin() {
    this.isPinned = !this.isPinned;
    if (!this.isPinned) {
      this.sidenav.close();
    }
  }
}
