import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { JobOffersComponent } from '../job-offers.component';
import { JobOffersService } from '../job-offers.service';
import { MockJobOffersService } from './job-offers.mocks';

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
    })

    it('should render two offers when data are provided', () => {
        fixture = TestBed.createComponent(JobOffersComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.mat-mdc-list-item').length).toBe(2)
    })
    
})