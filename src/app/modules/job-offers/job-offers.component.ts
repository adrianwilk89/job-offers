import { Component, OnInit } from '@angular/core';
import { JobOffersService } from './job-offers.service';
import { Observable } from 'rxjs';
import { JobOffer } from './constants';

@Component({
    selector: 'job-offers-list',
    templateUrl: './job-offers.component.html',
})

export class JobOffersComponent implements OnInit {

    constructor(private service: JobOffersService) { }

    jobs!: JobOffer[];


    ngOnInit() {
        this.service.getJobOffers().subscribe((data: any) => {
            this.jobs = data.jobs
        })
    }
}
