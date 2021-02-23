import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICurrentForecast } from '../models/current-forecast.model';
import { IWeeklyForecast } from '../models/weekly-forecast.model';
import { CommonService } from '../shared/services/common.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  searchWeatherForm: FormGroup;
  currentWeatherData: ICurrentForecast;
  weeklyForecastData: any[] = [];
  weeklyForecastTableData: any[] = [];
  isCurrentWeatherDataAvailable = false;
  isChartDataAvailable = false;
  isTableDataAvailable = false;
  currentCity: string;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  // chart options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Temp in (' + String.fromCharCode(176) + 'C)';
  timeline: boolean = true;
  showMoreButtonClicked = false;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {
    this.currentCity = 'Pune';
  }

  ngOnInit(): void {
    this.setWeatherSearchForm();
    this.getCurrentWeatherDetails();
  }

  setWeatherSearchForm(): void {
    this.searchWeatherForm = this.formBuilder.group({
      cityName: [this.currentCity, Validators.required]
    });
  }

  onWeatherSearchFormSubmit(isValid: boolean, formData: { cityName: string }): void {
    if (isValid) {
      this.currentCity = formData.cityName;
      this.getCurrentWeatherDetails();
    }
  }

  getCurrentWeatherDetails(): void {
    this.commonService.getCurrentWeatherDataByCity(this.currentCity).subscribe((result: ICurrentForecast) => {
      this.currentWeatherData = result;
      this.isCurrentWeatherDataAvailable = true;
      this.getWeeklyForecastDetails();
    }, (error: Error) => {
      console.log(error);
      this.isCurrentWeatherDataAvailable = false;
      this.isChartDataAvailable = false;
      this.isTableDataAvailable = false;
    });
  }

  getWeeklyForecastDetails(): void {
    let lat = this.currentWeatherData.coord.lat;
    let lon = this.currentWeatherData.coord.lon;
    this.commonService.getWeeklyForecastByLatLong(lat, lon).subscribe((result: IWeeklyForecast) => {
      this.weeklyForecastData = [];
      this.weeklyForecastTableData = [];
      console.log(result);
      let highTempSeriesObject: { name: string, series: any[] } = { name: 'High Temperature', series: [] };
      let lowTempSeriesObject: { name: string, series: any[] } = { name: 'Low Temperature', series: [] };
      _.forEach(result.daily, (daily) => {
        lowTempSeriesObject.series.push({
          name: this.getDayFromDateTime(daily.dt),
          value: daily.temp.min,
          day_of_month: this.getDayOfMonthByDateTime(daily.dt),
          weather_description: daily.weather[0].description,
        });
        highTempSeriesObject.series.push({
          name: this.getDayFromDateTime(daily.dt),
          value: daily.temp.max,
          day_of_month: this.getDayOfMonthByDateTime(daily.dt),
          weather_description: daily.weather[0].description,
        });
        this.weeklyForecastTableData.push({
          day: this.getDayFromDateTime(daily.dt),
          high_temp: daily.temp.max,
          low_temp: daily.temp.min,
          day_of_month: this.getDayOfMonthByDateTime(daily.dt),
          weather_desc: daily.weather[0].description
        });
      });
      this.weeklyForecastTableData.pop();
      lowTempSeriesObject.series.pop();
      highTempSeriesObject.series.pop();
      this.weeklyForecastData.push(lowTempSeriesObject, highTempSeriesObject);
      this.isChartDataAvailable = true;
      this.isTableDataAvailable = true;
    }, (error: Error) => {
      console.log(error);
      this.isChartDataAvailable = false;
      this.isTableDataAvailable = false;
    });
  }

  getDayFromDateTime(date: number): string {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dt = new Date(date * 1000);
    let dayName = days[dt.getDay()];
    return dayName;
  }

  getDayOfMonthByDateTime(date: number): number {
    let dt = new Date(date * 1000);
    let day = dt.getDate();
    return day;
  }

  getTooltipDetailsFromModel(model: any): string {
    let toolTipText = 'Day of the month : ' + model[0].day_of_month + '\n' +
      'High temperature : ' + model[1].value + '(' + String.fromCharCode(176) + 'C)' + '\n' +
      'Low Temperature : ' + model[0].value + '(' + String.fromCharCode(176) + 'C)' + '\n' +
      'Weather Description : ' + model[0].weather_description;

    return toolTipText;
  }

  onViewMoreButtonClicked(): void {
    this.showMoreButtonClicked = !this.showMoreButtonClicked;
  }

}
