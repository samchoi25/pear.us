import {useState, useEffect} from 'react';
import TypeRenderHelper from './components/TypeRenderHelper';
import './App.scss';

const API_URL = 'https://dummyjson.com/products/'

function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      return json;
    }

    fetchData().then(json => {
      //console.log(json);
      setData(json);
    });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <TypeRenderHelper data={data} keyName="root"/>
    </div>
  );
}

export default App;
