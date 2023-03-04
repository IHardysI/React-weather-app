import './App.scss';
import React from 'react';
import Weather from './components/Weather'

function App() {
  const [lat, setLat] = React.useState([])
  const [long, setLong] = React.useState([])
  const [data, setData] = React.useState([])
  const [cityName, setCityName] = React.useState('')
  const [cityData, setCityData] = React.useState([])




  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  const handleCitySubmit = async (e) => {
    e.preventDefault()

    if (cityName.trim() === '') {
      setCityName('incorrect city')
      return;
    }

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setCityData(cityData => [...cityData, result])
      setCityName('')
    })
  }
  

  return (
    <div className="App">
      <div>
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
      </div>
      {cityData.map(city => (
        <div key={city.id}>
          <Weather weatherData={city}/>
        </div>
      ))}
      <div className='app__form'>
        <form onSubmit={handleCitySubmit}>
          <input type='text' value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder='Enter city name'/>
          <button type='submit'>+</button>
        </form>
      </div>
    </div>
  );
}

export default App;
