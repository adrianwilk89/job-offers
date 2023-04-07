import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffersService } from './job-offers.service'
import { MatListModule } from '@angular/material/list';
import { JobOffersComponent } from './job-offers.component';

@NgModule({
    declarations: [JobOffersComponent],
    providers: [JobOffersService],
    imports: [CommonModule, MatListModule],
    exports: [JobOffersComponent],
})

export class JobOffersModule {
}