export interface IConstants {
    baseUrl: string;
    baseIPartUrl: string;
    authToken: string;
    selectedPartyId: string;
    loggedInPartyId: string;
}

// This static class is needed so we can pass in the baseURL to our iParts folder into SystemJS
// and because of some strange bug in our http interceptor which loses
//  the injected global settings from our service when doing HTTP post
export class AppConstants  {
    // TODO determine how we can inject into systemJS so we can remove this static class rubbish and use our service
    public static baseIPartUrl: string;
    public static baseUrl: string;
    public static authToken: string;

    // Needed for SystemJS
    public static init() {
        if (this.baseIPartUrl == null) {
            const clientContextElement = document.querySelector("#__ClientContext") as HTMLInputElement;
            if (clientContextElement) {
                const data = clientContextElement.value;
                const appContext: IConstants = JSON.parse(data);
                this.baseUrl = appContext.baseUrl;
                this.baseIPartUrl = appContext.baseUrl + 'Areas/';
                const requestVerificationTokenElement = document.querySelector("#__RequestVerificationToken") as HTMLInputElement;
                if(requestVerificationTokenElement)
                    this.authToken = requestVerificationTokenElement.value;
            }                       
        }
    }
}
// Needed for SystemJS
AppConstants.init();

export {AppConstants as default};
