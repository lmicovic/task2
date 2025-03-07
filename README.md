# Table of Contents
- [Introduction](#introduction)
- [Project Requirements](#project-requirements)
	- [Dependencies](#dependencies)
- [How to run](#how-to-run)
- [Screenshots](#screenshots)

# Introduction
This utility interacts with the [Trivia Questions Database API](https://opentdb.com/ "Trivia Questions Database API"), allowing users to 15 questions. It retrieves trivia questions and  displays questions in table. This utility also can save results in various formats: [CSV](https://en.wikipedia.org/wiki/Comma-separated_values "CSV"), [JSON](https://en.wikipedia.org/wiki/JSON "JSON"), or prints the output directly to the [console](https://en.wikipedia.org/wiki/Windows_Console "console"). This flexibility enables users to easily integrate trivia data into their applications or analyze it in a preferred format.

## Project Requirements
- This utility is using [Trivia Questions Database API](https://opentdb.com/ "Trivia Questions Database API") as backend.
- Utiliti is written in [Visual Studio Code IDE](http:/https://code.visualstudio.com// "Visual Studio Code IDE").

#### Dependencies:
- [Node.js](https://nodejs.org/en "Node.js") (version: 22.12.0)
- [Angular17](https://angular.dev/ "Angular17")

Trivia Questions Database API URL: https://opentdb.com/api.php
CSV and JSON files can be downloaded by clicking CSV or JSON button on gui.
If pressed Console button resulst wlill be printed in application console.


## How to run
1. Install node.js from:    https://nodejs.org/en/download
	- Run node.js installer
	- Check node.js version by typing following command in terminal:<br>
	`node -v`
	- Check npm(Node Package Manager) version by typing following command in terminal:<br>
	`npm -v`
2. Install Angular17 version on your computer by typing following command in terminal:<br>
`npm install -g @angular/cli@17.0.0`
	- Check Angular version by typing following in terminal:<br>
	`ng version`
3. Install all Angular dependencies:
	- Open Termnal and locate to project root directory:<br>
	`cd D:\Downloads\task2`
	- Install all Angular dependencies by typing following command in terminal:<br>
	`npm install`
4. Run Angular Application:
	- Open Termnal and locate to project root directory:<br>
	`cd D:\Downloads\task2`
	- In terminal type following command to start Angular application:<br>
	`ng serve`
	- Application will be up and running on URL:		http://localhost:4200/


##### [NOTICE]
- CSV Files: when .csv file is opened with Microsoft Excel it does not display properly, but when opened .csv file in Google Sheets or any other .csv viewer it works.
- API Constraints: cannot call API consistently n-times, so instead I get n-items in one API call. I got HTTPStatusCode 429 - Too Much Requests.


## Screenshots

