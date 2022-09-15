import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class GetResumeService {

  url="https://gist.githubusercontent.com/avishekhSingh/4bf49c030b57d71e60bbdc5ca92f205d/raw/77080d24205c661375c08e17d70ebf6d5fe6f8d7/ResumeData.json";
  constructor(private serverRequest:HttpClient) { }                                        //! datatype ==> HttpClient.

  //! Fetching data from url.
  getData(){
    return this.serverRequest.get(this.url)
  }
}
