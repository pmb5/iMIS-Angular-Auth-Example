import { APP_INITIALIZER, ErrorHandler, NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppConstantService, AuthorizationInterceptor,} from '../../core/core';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        // These provide lines inject our base URL magic and auto apply our token to all requests.
        // See these docs so we can change this into a single instance injection of a class and not to static params
        // https://angular.io/docs/ts/latest/api/core/index/Provider-class.html
        AppConstantService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthorizationInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }