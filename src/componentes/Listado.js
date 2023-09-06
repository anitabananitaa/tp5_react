import React from "react";
import Boton from "./Boton";

export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Limpiar: "",
    };
  }
  render(){
    const { limpiar } = this.state;
    return (
    <div className="Listado">
      MATERIAS E INFORMACIÓN 
      <Boton titulo="Limpiar"/>
      </div>
      );
  }
}
