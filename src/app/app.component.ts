import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'SemWeb';

    serverData: JSON;
    employeeData: JSON;
    employee: JSON;

    test: any;

    constructor(private httpClient: HttpClient) {
    }

    sayHi() {
        this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
            this.serverData = data as JSON;
            console.log(this.serverData);
        });
    }

    getAllEmployees() {
        this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
            this.employeeData = data as JSON;
            console.log(this.employeeData);
        });
    }

    getEmployee() {
        this.httpClient.get('http://127.0.0.1:5002/employees/1').subscribe(data => {
            this.employee = data as JSON;
            console.log(this.employee);
        });
    }


    onPatient() {

    }

    onSympt() {

    }

    onMaladie() {

    }

    onMedoc() {

    }
}
