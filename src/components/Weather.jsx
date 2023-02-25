import { Card } from 'semantic-ui-react'
import moment from 'moment';
import style from '../App.scss'
import sunny from '../img/Sunny.svg'
import visab from '../img/visab.svg'
import feels from '../img/fills.svg'
import humid from '../img/humidit.svg'
import wind from '../img/wind.svg'

const white = {
    color: "white"
}

const cardStyle = {
    boxShadow: "none",
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: "45px",
    color: "white",
    maxWidth: "350px",
    maxHeight: "475px"
}

const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

export default function Weather(props) {
    return(
        <div className='card'>
            <div className='card__up-block'>
                <img className='card__big-icon' src={sunny} alt="sun" />
                <div className='card__after-img-block'>
                    <h2 className='card__city'>{props.weatherData.name}</h2>
                    <p className='card__date'>{moment().format('dddd')} {moment().subtract(10, 'days').calendar()}</p>
                </div>
            </div>
            <div className='card__temperature'>
                <p className='card__tmp-numb'><span>{Math.round(props.weatherData.main.temp)}</span> °C</p>
                <p className='card__clouds'>{props.weatherData.weather[0].description}</p>
            </div>
            <div className='card__stats'>
                <p className='card__firs-line card__item'><div><img src={visab} alt="visab" />Visibility {props.weatherData.visibility} ft</div> <span className='card__line'></span> <div><img src={feels} alt="feels" /> Feels like {Math.round(props.weatherData.main.feels_like)} °C</div> </p>
                <p className='card__humid card__item'><div><img src={humid} alt="humidity" />Humidity {props.weatherData.main.humidity} %</div> <span className='card__line'></span><div> <img src={wind} alt="wind" /> Wind {props.weatherData.wind.speed} km</div></p>
            </div>
        </div>
    )
}