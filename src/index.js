import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import axios from 'axios';
import Loading from './components/Loading';
import Info from './components/Info';

function App() {
  const [address, setAddress] = useState()
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const postalCode = document.querySelector(".postalCode").value;
    setLoading(true);
    if(postalCode !== null){
      const data = await axios.get(`https://cdn.apicep.com/file/apicep/${postalCode}.json`)
          .then((res) => {setLoading(false); return res.data})
          .catch(() => {return alert("Campo inválido!")})
      console.log(data);
      setAddress(data)
    } 
  }

  return (
    <div className="container">
      <div className='content'>
        <h1>Buscador de CEP</h1>

        <div className='searchBox'>
          <input type={'text'} className="postalCode" placeholder='Digite o CEP'/>
          <button onClick={getData}>Pesquisar</button>
        </div>
      </div>

      {loading &&(<Loading />)}
      {!loading && address &&(<Info data={address}/>)}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
