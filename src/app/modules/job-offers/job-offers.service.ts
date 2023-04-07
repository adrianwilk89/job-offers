import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { JobOffer } from './constants';
import { environment } from 'src/environments/environment';

@Injectable()
export class JobOffersService {

    constructor(private http: HttpClient) {}

    getJobOffers(): Observable<{ jobs: JobOffer[] }> {
        return this.http.get<{ jobs: JobOffer[] }>(`${environment.apiEndpoint}offers/list/pl`).pipe(catchError((error) => {
            return throwError(() => error);
        }),)
    }

}