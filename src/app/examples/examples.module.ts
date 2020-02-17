// import { NavbarComponent } from './../shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { OpensourceComponent } from './opensource/opensource.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    exports: [
        LandingComponent,
        OpensourceComponent,
        ProductsComponent,
        ServicesComponent,
        CarouselComponent
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        OpensourceComponent,
        ProductsComponent,
        ServicesComponent,
        CarouselComponent,
        // NavbarComponent
    ]
})
export class ExamplesModule { }
