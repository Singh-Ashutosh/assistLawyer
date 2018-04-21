import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpCallServices {
  private lawActUrl;
  private lawChapterUrl;
  private lawSectionUrl;
  private lawDivisonUrl;

  constructor(private http: HttpClient) {
    this.lawActUrl =
      'https://8i94lr2q8c.execute-api.ap-south-1.amazonaws.com/dev/lawact';
    this.lawChapterUrl =
      'https://tfl9128m55.execute-api.ap-south-1.amazonaws.com/dev/lawchapter';
    this.lawSectionUrl =
      'https://6ea9rb825m.execute-api.ap-south-1.amazonaws.com/dev/lawsection';
    this.lawDivisonUrl =
      'https://7te8jnp8n5.execute-api.ap-south-1.amazonaws.com/dev/lawdivision';
  }

  // Law Act Operations
  getLawAct() {
    return this.http.get(this.lawActUrl);
  }

  addLawAct(newLawAct) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(
      this.lawActUrl,
      JSON.stringify(newLawAct),
      httpOptions
    );
  }

  // Law Chapter Operations
  getLawChapter() {
    return this.http.get(this.lawChapterUrl);
  }

  addLawChapter(newLawChapter) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(
      this.lawChapterUrl,
      JSON.stringify(newLawChapter),
      httpOptions
    );
  }

  // Law Section Operations
  getLawSection() {
    return this.http.get(this.lawSectionUrl);
  }

  addLawSection(newLawSection) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(
      this.lawSectionUrl,
      JSON.stringify(newLawSection),
      httpOptions
    );
  }

  // Law Division Operations
  getLawDivision() {
    return this.http.get(this.lawDivisonUrl);
  }

  addLawDivision(newLawDivision) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(
      this.lawDivisonUrl,
      JSON.stringify(newLawDivision),
      httpOptions
    );
  }
}
