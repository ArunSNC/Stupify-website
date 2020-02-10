import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    exports: [
        LandingComponent
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        ProductsComponent
    ]
})
export class ExamplesModule { }
