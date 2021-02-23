export class Config {

    public static getUrl(url: string): string {
        const apiKeyAndUnits = '&units=metric&appid=9ae0aa401fa76ac73c22b956d9cdfa09';
        const baseUrl = 'http://api.openweathermap.org/data/2.5/';
        const apiUrl = baseUrl + url + apiKeyAndUnits;
        return apiUrl;
    }
}
