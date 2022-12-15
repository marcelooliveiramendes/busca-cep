/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./info.scss";

// import { Container } from './styles';
function Info({ data }) {
  const {  address, city, district, state } = data;

  console.log(address);
  return (
    <div className="infoContent">
      <div className="title">Descrição</div>
      <div className="addressContent">

        <div className="row">
          <div>
            <label htmlFor="addressDescription">Rua</label>
            <p className="addressDescription">{address}</p>
          </div>
          <div className="rowLastItem">
            <label htmlFor="district">Bairro</label>
            <p className="district">{district}</p>
          </div>
        </div>
        <div className="row">
            <div>
                <label htmlFor="city">Cidade</label>
                <p className="city">{city}</p>
            </div>
            <div className="rowLastItem">
                <label htmlFor="state">Estado</label>
                <p className="state">{state}</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Info;
