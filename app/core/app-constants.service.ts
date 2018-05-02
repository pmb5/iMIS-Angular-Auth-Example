import { Injectable } from '@angular/core';
import { IConstants } from './appConstants';

// and also inject this into angular.
@Injectable()
export class AppConstantService implements IConstants {
    public baseUrl: string;
    public baseIPartUrl: string;
    public authToken: string;
    public selectedPartyId: string;
    public loggedInPartyId: string;

    constructor() {
        const data = (document.querySelector("#__ClientContext") as HTMLInputElement).value;

        // we used to deserialize straight into this class, but i'm not sure how to structure this
        const appContext: IConstants = JSON.parse(data);
        appContext.authToken = (document.querySelector("#__RequestVerificationToken") as HTMLInputElement).value;

        this.baseUrl = appContext.baseUrl;
        this.baseIPartUrl = this.baseUrl + 'Areas/';
        this.authToken = appContext.authToken;

        this.selectedPartyId = appContext.selectedPartyId;
        this.loggedInPartyId = appContext.loggedInPartyId;
    }
}
