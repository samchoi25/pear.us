import {useState, useEffect, useCallback} from 'react';
import DataSet from './components/DataSet';
import './App.scss';

const API_URL = 'https://dummyjson.com/products/'

function App() {

  const [data, setData] = useState({});
  const fetchData = useCallback(async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      setData(json)
    }, []);

    useEffect(() => {
      fetchData();
    }, [fetchData]);



  return (
    <div className="App">
      <header className="App-header" />
      <DataSet
        data={data}
        name="root"
        isRoot
      />
</div>
  );
}

export default App;
