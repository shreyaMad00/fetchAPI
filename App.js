import './App.css';
import { useEffect, useState } from 'react';
export default function App() {
  const [data, setData] = useState(['']);
  const getData = async () => {
    const resp = await fetch('https://api.forexrateapi.com/v1/latest?api_key=f8b71fcba5a9ea09e04ffa18f7b39fdc&base=USD&currencies=EUR,INR,JPY');
    const json = await resp.json();
    setData(json);
    
    const rates = data.rates;

    
  }
 
  useEffect(() => {
    getData();
  }, []);
  
return(
  <>
  <pre>BASE :- {data.base}</pre>
  <div>Rates</div>
  <pre>INR :- {data.rates.INR}</pre>
  <pre>EUR :- {data.rates.EUR}</pre>
  <pre>JPY :- {data.rates.JPY}</pre>
  <div>Success :- {data.success.toString()}</div>
  <div>Timestamp :- {data.timestamp}</div>
  </>
)
 

}