import { Injectable } from '@angular/core';
import { mockAdmin, mockUser } from '../../mock-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _isAuthenticated: boolean = false;
  private isAdmin:boolean=false;
  getUserType(): string {
    return this.isAdmin ? 'admin' : 'user';
  }

  constructor() { }
 
  login(username: string, password: string): boolean {
    if (username === mockUser.username && password === mockUser.password) {
      this._isAuthenticated = true;
      this.isAdmin=false;
      return true;
    } else {
      this._isAuthenticated = false;
      return false;
    }
  }
  loginAsAdmin(username: string, password: string): boolean {
    if (username === mockAdmin.username && password === mockAdmin.password) {
      this._isAuthenticated = true;
      this.isAdmin=true
      return true;
    } else {
      this._isAuthenticated = false;
      return false;
    }
  }
 
  logout(): void {
    this._isAuthenticated = false;
  }
 
  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
