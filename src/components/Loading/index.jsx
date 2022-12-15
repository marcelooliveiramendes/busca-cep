import React from 'react';
import gifImage from "../../images/loading.png"

import './loading.scss'
// import { Container } from './styles';

function Loading() {
  return(
    <div className='wrapper'>
        <h3>Carregando...</h3>
        <img src={gifImage} className={'loading'} alt="loading"/>
    </div>
  );
}

export default Loading;