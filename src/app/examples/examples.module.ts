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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    exports: [
        LandingComponent,
        OpensourceComponent,
        ProductsComponent,
        ServicesComponent
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        OpensourceComponent,
        ProductsComponent,
        ServicesComponent
    ]
})
export class ExamplesModule { }
