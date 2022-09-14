import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {

  url="https://gist.githubusercontent.com/avishekhSingh/4bf49c030b57d71e60bbdc5ca92f205d/raw/ecb38769d58af934d5f0fce6ca6306047d47dfa5/ResumeData.json";
  constructor(private serverRequest:HttpClient) { }                                        //! datatype ==> HttpClient.

  //! Fetching data from url.
  getData(){
    return this.serverRequest.get(this.url)
  }
}
