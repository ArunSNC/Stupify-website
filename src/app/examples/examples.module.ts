import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { OpensourceComponent } from './opensource/opensource.component';

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
        ProductsComponent,
        ServicesComponent,
        OpensourceComponent
    ]
})
export class ExamplesModule { }
