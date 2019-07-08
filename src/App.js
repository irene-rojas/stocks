import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=${process.env.REACT_APP_ALPHAVANTAGE_API}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
    }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
