import './App.css';
import { useEffect, useState } from 'react';
import { getAstroData } from './utils/fetchData';

import { IAstroData } from './utils/dataTypes';
import Display from './components/display';

// Time of day
// Gauge how much time you have until sunset or until the next sunset
// If before sunset, display the sun else diplay the moon(with current phase)
// The sun should rotate..?
// Use a Moon component(that takes a phase prop)
// Just have two different views/components (day/night)


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [astroData, setAstroData] = useState<IAstroData | null>(null)

  const getData = () =>{
    setIsLoading(true);
    getAstroData()
      .then((response) => response.json())
      .then((data) => {
        setAstroData(data)
        setIsLoading(false)
      })
      .catch(error => console.log("ERROR: ", error))
  }

  console.log("Astrology data: ", astroData)

  // TODO This is absolutley not the best way to do this
  useEffect(() => {
    if(!isLoading && !astroData){
      console.log("Getting data")
      getData()
    }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        Sky Watch
      </header>
      { astroData ?
        <Display astroData={astroData}/>
        :
        <div>
          No data
        </div>
      }
    </div>
  );
}

export default App;
