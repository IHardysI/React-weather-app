import './App.scss';
import React from 'react';
import Weather from './components/Weather'
import heart from './img/heart.svg'

function App() {
  const [lat, setLat] = React.useState([])
  const [long, setLong] = React.useState([])
  const [data, setData] = React.useState([])
  const [cityName, setCityName] = React.useState('')
  const [cityData, setCityData] = React.useState([])
  const [error, setError] = React.useState(null)
  const [cardCount, setCardCount] = React.useState(0)




  

  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        if (res.ok) {
          const result = await res.json();
          setData(result);
          console.log(result);
        } else {
          console.log(error)
        }
      } catch (err) {
        console.log(error)
      }
    }

    fetchData();
  }, [lat,long])

  const handleCitySubmit = async (e) => {
    e.preventDefault()

    if (cityName.trim() === '') {
      setCityName('incorrect city')
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      if (res.ok) {
        const result = await res.json();
        setCityData(cityData => [...cityData, result])
        setCityName('')
        setError(null);
        setCardCount(prevCardCount => setCardCount(prevCardCount + 1))
      } else {
        setError('Wrong sity name');
      }
    } catch (err) {
      setError('Wrong sity name');
    }
  }



  

  return (
    <div className="App">
      <div className={`app__cards ${cardCount > 0 ? 'justify-content' : ''}`}>
        {(typeof data.main != 'undefined') ? (
          <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
        {cityData.map(city => (
          <div key={city.id}>
            <Weather weatherData={city}/>
          </div>
        ))}
        <div className='app__form'>
          <form onSubmit={handleCitySubmit}>
            <input type='text' value={cityName}  onChange={(e) => setCityName(e.target.value)} placeholder='Enter city name'/>
            {error && <p className='app__error'>{error}</p>}
            <button type='submit'>+</button>
          </form>
        </div>
      </div>
      <p className='app__bottom'>
      Made with  <img src={heart} alt="heart"></img>  by Uładzisłaŭ Karotkin
      </p>
    </div>
  );
}

export default App;
