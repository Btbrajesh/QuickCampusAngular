import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<any | null>;
    public user: Observable<any | null>;
    storedUser:any;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.storedUser = JSON.parse(localStorage.getItem('authenticate') || 'null');
        this.userSubject = new BehaviorSubject<any>(this.storedUser || null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue() {
        return this.storedUser;
    }

    login(username: string, password: string) {
        debugger;
        return this.http.post<any>(`${environment.apiUrl}/Account/AdminLogin`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if (user && user.result && user.result.data) {
                    const userData = user.result.data;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('authenticate', JSON.stringify(userData));
                    this.userSubject.next(userData);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('authenticate');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}