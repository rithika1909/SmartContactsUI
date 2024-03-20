import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Authentication/auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  isAdmin: boolean = false ;
  showToggle: boolean = true;
  showSideNav: boolean = false;
  isOpen: boolean = false;

  constructor(private authService: AuthService,private router: Router) {
    this.isAdmin = this.authService.getUserType() === 'admin';
    console.log("123456789"+this.isAdmin);
    
  }

  logout(): void {
    if (confirm("Are you sure you want to logout?")) {
      this.authService.logout();
      this.router.navigate(['/login']); // Redirect to login page
    }
  }
  // toggleSideNav(): void {
  //   this.showSideNav = !this.showSideNav;
  //   this.showToggle = false;
  // }
  toggleNav() {
    this.isOpen = !this.isOpen;
  }

}
