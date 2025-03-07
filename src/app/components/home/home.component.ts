import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../other/service/result.service';
import { Result } from '../../other/model/Result';
import { LocalizedString } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ResultService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Requirements:
  // 1) NPM 10 Installed
  // 2) Angular 17 Installed
  //
  // - How to setup program:
  //
  //    1) Install node.js from:    https://nodejs.org/en/download
  //    2) Run node.js installer
  //    3) Check node.js version:    node -v
  //    4) Check npm version:        npm -v
  //    5) Open CMD and locate to project root directory
  //    6) Install All Angular Dependencies by running command:     npm install
  //    7) Locate to Project Root Directory and run command:        ng serve

  // Angular Application is running on:         http://localhost:4200/
  // API URL:                                   https://opentdb.com/api.php?amount=1&category=10&difficulty=easy

  //-------------------------------------------------------------------------------------
  // [*NOTICE]
  //-------------------------------------------------------------------------------------
  // CSV Files:   			  when .csv file is opened with Microsoft Excel it does not work, but when opened .csv file in Google Sheets its working.
  // API Constraints: 		cannot call API consistently n-times, so instead I get n-items in one API call. - I got HTTPStatusCode 429 - Too Much Requests
  //-------------------------------------------------------------------------------------

  results: Result[] = [];

  constructor(private resultService: ResultService) {

  }

  ngOnInit(): void {
    this.getResults();
  }

  private getResults() {

    // Send HTTP Get Request to Backend
    this.resultService.getResults().subscribe((response: any) => {

      // Receive Results as JSON Response - save results
      this.results = response.results;

    }, (error) => {
      console.log("Error fetching data: " + error);
      
    });

  }


  // -----------------------------------------------------------------------------------------------
  // CSV File
  // -----------------------------------------------------------------------------------------------
  onCSV() {

    let csvString = this.convertToCSV();            // Convert Result to CSV File
    this.downloadCSV(csvString, "result.csv");      // Enable User to Download - result.csv file
    
  }

  /**
   * Converts Results Objects to csvString.
   * @returns cvsString - Results object converted in to CSV String
   */
  private convertToCSV(): string {

    // Create CSV Headers
    let headers: string[] = [];
    let headersString: String = "";
    for (const key in this.results[0]) {
      headers.push(key);
      headersString += key + ",";
    }

    headersString = headersString.substring(0, headersString.length-1);
    
    // Create CSV Rows
    let rows: string[] = [];
    rows.push(headersString as string);

    let currentRow: string;
    for (const row of this.results) {
      currentRow = row.type + "," + row.difficulty + ',' + row.category + "," + row.question + "," + row.correct_answer + "," + row.incorrect_answers;
      rows.push(currentRow);
      // console.log(currentRow);
    }

    let csvString = rows.join("\n");

    return csvString;

  }

  /**
   * Handle the CSV downloading process for User
   * @param csvString - Results object convertet in to CSV String
   * @param fileName - name of the file that will be downloaded
   */
  private downloadCSV(csvString: string, fileName: string): void {

    // Create Blob from CSV String
    let blob = new Blob([csvString], {type: "text/csv"});
    
    // Create Link Element
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Append Link to Body - necessary for Firefox
    document.body.appendChild(link);

    link.click();

    document.body.appendChild(link);        // removes link from body immediately

  }
  // -----------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------
  // JSON File
  // -----------------------------------------------------------------------------------------------
  onJson() {

    let jsonString = this.convertToJSON();
    this.downloadJSON(jsonString, "result.json");

  }

  /**
   * Converts Results Objects to JSON.
   * @returns jsonString - Results object converted in to JSON String
   */
  private convertToJSON(): string {

    let jsonString: string = JSON.stringify(this.results, null, 2);
    return jsonString;

  }

  /**
   * Handle the JSON downloading process for User
   * @param jsonString - Results object convertet in to JSON String
   * @param fileName - name of the file that will be downloaded
   */
  private downloadJSON(jsonString: string, filename: string) {

    // Create Blob from JSON String
    let blob = new Blob([jsonString], {type: "application/json"});

    // Create Link Element
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Append Link to Body - necessary for Firefox
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);        // removes link from body immediately

  }
  // -----------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------
  // Console
  // -----------------------------------------------------------------------------------------------  
  onConsole() {
    console.log(this.results);
  }

}
