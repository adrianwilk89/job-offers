import { of } from 'rxjs';
import { JobOffer } from '../constants';

export const MockJobOffersData: JobOffer[] = [{
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

export const MockJobOffersService = {
    getJobOffers: jasmine.createSpy('getCount').and.returnValue(of({
        jobs: MockJobOffersData
    }))
}