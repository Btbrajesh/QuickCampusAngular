import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleRequestModal } from '../modals/rolerequest';

@Injectable({
    providedIn: 'root'
  })
  
export class RoleService {

    constructor(private http: HttpClient) {
    }

    roleAddUpdate(roledata: RoleRequestModal): Observable<any> {
        return this.http.post(`${environment.apiUrl}/Role/roleAdd`, roledata);
    }


}