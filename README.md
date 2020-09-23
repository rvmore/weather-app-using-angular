### weather-app-using-angular https://github.com/rvmore/weather-app-using-angular
Weather application allows user to get real-time weather details for a searched city through keywords such as city name, zip code or country name. This web app has some feature like chart which shows forecast details of upcoming 7 days. Also it shows the weather forecast details of upcoming days in data table. 

## Get started

### Clone the repo

```shell
git clone https://github.com/rvmore/weather-app-using-angular
cd weather-app-using-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
ng serve
```
The ng serve command transpiles the angular code and hosts it locally on port 4200. Use CTRL+C to shutdown this local server mannually.

### Libraries Used
#### Prime Ng Library
Prime ng library provides many free and useful templates for angular application. In this project, the weekly forecast data section uses PrimeNg library for displaying the data into the table. This table has some extensive feature such as sorting of columns and filtering the data on the basis of any keyword.

### Ngx-Charts
Ngx-charts library provides chart templates for angular application. In this project, weekly forecast chart uses Ngx-charts library for displaying the weekly forecast data on the chart. The line-chart of this library is used in this project.

### Bootstrap v4
Bootstrap library provides stylesheet features for angular application, In this project bootstrap library is used for style purpose.

### ngx-spinner
Ngx-spinner library provides a spinner service that renders the spinner component on the start of application. The spinner stays for 3 seconds and closes.

### lodash
Lodash library is used for manipulating, sorting, filtering, arranging the objects and arrays. In this application it is used for modifying the backend data.

### Backend API - Open Weather MAP https://openweathermap.org/api
The "OpenWeatherMap API Guide" helps you find useful information, links, documents to start using our weather API services smoothly.
OpenWeatherMap is one of the leading digital weather information providers. We are a small IT company, established in 2014 by a group of engineers and experts in Big Data, data processing, and satellite imagery processing. Our headquarters is in the UK, we have an office in the USA, and the development team in Latvia (EU).
