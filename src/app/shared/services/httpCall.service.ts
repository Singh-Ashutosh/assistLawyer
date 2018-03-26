import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpCallServices {
    private lawActUrl;

    constructor(private http: HttpClient) {
        this.lawActUrl = 'https://8i94lr2q8c.execute-api.ap-south-1.amazonaws.com/dev/lawact';
    }



    getLawAct() {
        return this.http.get(this.lawActUrl);
    }

    addLawAct(newLawAct) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.lawActUrl, JSON.stringify(newLawAct), httpOptions);

    }
}
