import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Config } from '../config/config';
// MODEL IMPORTS
import { ICurrentForecast } from '../../models/current-forecast.model';
import { IWeeklyForecast } from '../../models/weekly-forecast.model';
@Injectable()

export class CommonService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getCurrentWeatherDataByCity(cityName: string): Observable<ICurrentForecast | Error> {
        const url = Config.getUrl('weather?q=' + cityName);
        return this.httpClient.get(url)
            .pipe(
                map((body: ICurrentForecast) => {
                    return body;
                }),
                catchError((e: Error) => {
                    throw new Error('Unable to get forecast details');
                }),
            );
    }

    getWeeklyForecastByLatLong(lat: number, lon: number): Observable<IWeeklyForecast | Error> {
        const url = Config.getUrl('onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly');
        return this.httpClient.get(url)
            .pipe(
                map((body: IWeeklyForecast) => {
                    return body;
                }),
                catchError((e: Error) => {
                    throw new Error('Unable to get forecast details');
                })
            );
    }

}
