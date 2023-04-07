import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { JobOffersComponent } from '../modules/job-offers/job-offers.component';
import { JobOffersService } from '../modules/job-offers/job-offers.service';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JobOffersComponent
      ],
      imports: [MatListModule, HttpClientModule],
      providers: [JobOffersService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
  })

  it('should render AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'LOT - Job offers'`, () => {
    expect(component.title).toEqual('LOT - Job offers');
  });
});
