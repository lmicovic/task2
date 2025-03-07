import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/Result';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/**
 * Service used to communicate with API
 */
export class ResultService {

  private apiUrl: string = "https://opentdb.com/api.php?amount=15&category=10&difficulty=easy";

  constructor(private http: HttpClient) { 
    
  }

  /**
   * Sends HTTP Get Request to specified URL
   * @returns Observable
   */
  public getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.apiUrl);
  }

}
