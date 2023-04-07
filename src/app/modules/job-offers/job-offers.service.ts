import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JobOffer } from './constants';

@Injectable()
export class JobOffersService {

    constructor(private http: HttpClient) {}

    getJobOffers(): Observable<{ jobs: JobOffer[] }> {
        return this.http.get<{ jobs: JobOffer[] }>('https://api.lot.com/hr/v3/offers/list/pl')
    }

}