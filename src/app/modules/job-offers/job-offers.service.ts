import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { JobOffer } from './constants';

@Injectable()
export class JobOffersService {

    constructor(private http: HttpClient) {}

    getJobOffers(): Observable<JobOffer[]> {
        return this.http.get<JobOffer[]>('https://api.lot.com/hr/v3/offers/list/pl')
    }
}