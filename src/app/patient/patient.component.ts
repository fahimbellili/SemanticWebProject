import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

    test: any;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
    }

    getTest() {
        this.httpClient.get('http://127.0.0.1:5002/Test').subscribe(data => {
            this.test = data;
            console.log(this.test);
        });
    }

}
