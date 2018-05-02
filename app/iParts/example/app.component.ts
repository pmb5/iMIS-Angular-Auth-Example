import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Component({
    
    selector: 'pass-through-auth-example',
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    party: any;

    constructor(private http: HttpClient) {
    }

    public ngOnInit(): void {
        this.http.get("api/Party/112")
        .map((data) => {
            console.log(data);
            this.party = data;
        });
    }
}
