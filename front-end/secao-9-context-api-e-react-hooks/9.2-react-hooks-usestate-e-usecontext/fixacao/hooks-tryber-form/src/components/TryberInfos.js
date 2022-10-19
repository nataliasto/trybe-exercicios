import React, { useContext } from "react";
import FormContext from "../context/FormContext";

function TryberInfos() {
  const {infosList} = useContext(FormContext);
  return (
    <ul>
      {infosList.map((info, index) => (
        <li key={index}>
          <b>Nome:</b> {info.name}{' '}
          <b>Idade:</b> {info.age}{' '}
          <b>Cidade:</b> {info.city}{' '}
          <b>Módulo atual:</b> {info.module}
        </li>
      ))}
    </ul>
  )
}

export default TryberInfos;
