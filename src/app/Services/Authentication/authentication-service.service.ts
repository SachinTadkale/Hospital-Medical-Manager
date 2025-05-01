import { Injectable } from '@angular/core';
import { userData } from '../../model/user-data';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService{
 
  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor() {}

  signup(userData: userData): string {
    const users = this.getAllUsers();

    // Check if user already exists
    const userExists = users.some(user => user.email === userData.email);
    if (userExists) {
      return 'User already exists';
    }

    users.push(userData);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return 'Signup successful';
  }

  login(email: string, password: string): string {
    const users = this.getAllUsers();
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(matchedUser));
      return 'Login successful';
    }

    return 'Invalid email or password';
  }

  getCurrentUser(): userData | null {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  private getAllUsers(): userData[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }
}
