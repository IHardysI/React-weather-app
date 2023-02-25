import { Card } from 'semantic-ui-react'
import moment from 'moment';
import style from '../App.scss'
import sunny from '../img/Sunny.svg'
import cloudy from '../img/PartlyCloudy.svg'
import snowy from '../img/Snowy.svg'
import rainy from '../img/Rainy.svg'
import rainThunder from '../img/RainThunder.svg'
import visab from '../img/visab.svg'
import feels from '../img/fills.svg'
import humid from '../img/humidit.svg'
import wind from '../img/wind.svg'


export default function Weather(props) {

    let weatherIcon 
    if(props.weatherData.weather[0].main === 'Clouds') {
        weatherIcon = cloudy 
    } else if(props.weatherData.weather[0].main === 'Clear') {
        weatherIcon = sunny
    } else if(props.weatherData.weather[0].main === 'Snow') {
        weatherIcon = snowy
    } else if(props.weatherData.weather[0].main === 'Rain') {
        weatherIcon = rainy
    } else {
        weatherIcon = rainThunder
    }


    return(
        <div className='card'>
            <div className='card__up-block'>
                <img className='card__big-icon' src={weatherIcon} alt="sun" />
                <div className='card__after-img-block'>
                    <h2 className='card__city'>{props.weatherData.name}</h2>
                    <p className='card__date'>{moment().format('dddd')} {moment().format('L')}</p>
                </div>
            </div>
            <div className='card__temperature'>
                <p className='card__tmp-numb'><span className='card__numb'>{Math.round(props.weatherData.main.temp)}</span> °C</p>
                <p className='card__clouds'>{props.weatherData.weather[0].description}</p>
            </div>
            <div className='card__stats'>
                <div className='card__left-block'>
                    <p className='card__left-item'><div><img src={visab} alt="visab" />Visibility {props.weatherData.visibility} ft</div> <span className='card__line'></span></p>
                    <p className='card__left-item'><div><img src={humid} alt="humidity" />Humidity {props.weatherData.main.humidity} %</div> <span className='card__line'></span></p>
                </div>
                <div className='card__right-block'>
                    <p className='card__right-item'><div><img src={feels} alt="feels" /> Feels like {Math.round(props.weatherData.main.feels_like)} °C</div> </p>
                    <p className='card__right-item'><div> <img src={wind} alt="wind" /> Wind {props.weatherData.wind.speed} km</div></p>
                </div>
            </div>
        </div>
    )
}


{/* <p className='card__firs-line card__item'><div><img src={visab} alt="visab" />Visibility {props.weatherData.visibility} ft</div> <span className='card__line'></span> <div><img src={feels} alt="feels" /> Feels like {Math.round(props.weatherData.main.feels_like)} °C</div> </p>
<p className='card__humid card__item'><div><img src={humid} alt="humidity" />Humidity {props.weatherData.main.humidity} %</div> <span className='card__line'></span><div> <img src={wind} alt="wind" /> Wind {props.weatherData.wind.speed} km</div></p> */}