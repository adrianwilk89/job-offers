import { TestBed, ComponentFixture } from '@angular/core/testing';
import { JobOffersComponent } from '../job-offers/job-offers.component';
import { MatListModule } from '@angular/material/list';
import { JobOffersService } from './job-offers.service';
import { of } from 'rxjs';
import { JobOffer } from './constants';

const MockJobOffersData: JobOffer[] = [{
    category: ["Staże i praktyki"],
    country: "PL",
    date: "2023-04-06",
    location: "Warszawa",
    reference: "REK/staż2023/LOT",
    region: "mazowieckie",
    title: "LOT Summer Internship",
    url: "https://skk.erecruiter.pl/Offer.aspx?oid=3954780&cfg=9A567C365D4C4B7793E837FF858191F4&ejoId=164539&ejorId=222948&comId=18797165"
},
{
    category: ["Biuro Zarządu"],
    country: "PL",
    date: "2023-04-05",
    location: "Warszawa",
    reference: "",
    region: "mazowieckie",
    title: "Specjalista ds. ochrony danych osobowych",
    url: "https://skk.erecruiter.pl/Offer.aspx?oid=3953841&cfg=9A567C365D4C4B7793E837FF858191F4&ejoId=167195&ejorId=223528&comId=18797165"
}]

const MockJobOffersService = {
    getJobOffers: jasmine.createSpy('getCount').and.returnValue(of({
        jobs: MockJobOffersData
    })),
}

describe('JobOffers', () => {

    let component: JobOffersComponent;
    let fixture: ComponentFixture<JobOffersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                JobOffersComponent
            ],
            imports: [MatListModule],
            providers: [{ provide: JobOffersService, useValue: MockJobOffersService }]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(JobOffersComponent);
        component = fixture.componentInstance;
    });

    it('should render the JobOffersComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should call getJobOffers on onInit', () => {
        fixture = TestBed.createComponent(JobOffersComponent);
        fixture.detectChanges();
        expect(MockJobOffersService.getJobOffers).toHaveBeenCalled();
        expect(fixture.componentInstance.jobs.length).toBe(2);

    })

    it('should render two offers when data are provided', () => {
        fixture = TestBed.createComponent(JobOffersComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.mat-mdc-list-item').length).toBe(2)
    })
})