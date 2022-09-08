import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {

  url="https://gist.githubusercontent.com/avishekhSingh/4bf49c030b57d71e60bbdc5ca92f205d/raw/e65ed5a86af29c4f6e71be74e04983557c695d3f/ResumeData.json";
  constructor(private serverRequest:HttpClient) { }                                        //! datatype ==> HttpClient.

  //! Fetching data from url.
  getData(){
    return this.serverRequest.get(this.url)
  }
}
