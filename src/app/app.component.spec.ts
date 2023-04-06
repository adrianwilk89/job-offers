import { TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { JobOffersComponent } from './modules/job-offers/job-offers.component';
import { JobOffersService } from './modules/job-offers/job-offers.service';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JobOffersComponent
      ],
      imports: [MatListModule, HttpClientModule],
      providers: [JobOffersService]
      // providers: [{ provide: JobOffersService }]
    }).compileComponents();
  });

  it('should render AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'LOT - Job offers'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LOT - Job offers');
  });
});
