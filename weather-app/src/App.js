import { useRef, useState} from "react";
import WeatherContainer from "./components/WeatherContainer";
import {BsCloudRainFill} from 'react-icons/bs'

function App({apiKey}) {
  const [city, setCity] = useState('')
  const cityRef = useRef(null)

  function handleChange(){
    console.log("New State: " + cityRef.current.value)
    setCity(cityRef.current.value)
  }

  return (
    <div className="App bg-slate-800">
      <div className="flex flex-col justify-center items-center mx-10 min-h-screen">
        <div className="flex text-3xl md:text-5xl text-white mx-10">
          <BsCloudRainFill/>
          <h1 className="font-chivo mx-5">5-day Forecast</h1>
          <BsCloudRainFill/>
        </div>
        
        <div className="flex">
          <input type="text" className="w-56 md:w-80 h-16 text-lg md:text-2xl rounded-md text-center my-5 mx-2 font-chivo" placeholder="Enter a city.." ref={cityRef}/>
          <button className="h-16 text-sm md:text-lg text-white font-chivo rounded-lg shadow-xl bg-slate-400 my-5 mx-2 p-5" 
            onClick={() => handleChange()}>Go!</button>
        </div>
        {city && city !== ''? 
          <WeatherContainer search={city} apiKey={apiKey}/>
          :
          <p className="text-lg md:text-3xl text-white font-chivo">No City Name Entered..</p>
        }
      </div> 
    </div>
  );
}

export default App;
