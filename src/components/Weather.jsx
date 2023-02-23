import { Card } from 'semantic-ui-react'
import moment from 'moment';


export default function Weather(props) {
    return(
        <Card>
            <Card.Content>
                <Card.Header className="header">City Name: {props.weatherData.name}</Card.Header>
                <p>Temprature: {props.weatherData.main.temp} &deg;C</p>
                <p>Sunrise: {new Date(props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Description: {props.weatherData.weather[0].main}</p>
                <p>Humidity: {props.weatherData.main.humidity} %</p>
                <p>Day: {moment().format('dddd')}</p>
                <p>Date: {moment().format('LL')}</p>
                </Card.Content>
        </Card>
    )
}