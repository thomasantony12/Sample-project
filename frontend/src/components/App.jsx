import { useState, useEffect } from 'react'
import axios from "axios";


function App() {
  const route = 'http://localhost:3001/';
  const [count, setCount] = useState(0);
  var response = {};

  const res = "hi";

  useEffect(() => {
    async function load(){
      response = await axios.get(route + 'load');
    }
    load;
    console.log(response);
  }, []);
 

  async function caall(e){
    e.preventDefault();
    await axios.post(route + 'hi', {res: res});
  }

  return (
    <div>
    <h1>{response.id}</h1>
    <button onClick={caall}>hi</button>
    </div>
  )
}

export default App
