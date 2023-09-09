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
      <h3> MATERIAS E INFORMACIÓN </h3>
      <Boton titulo="Limpiar"/>
    </div>
    );
  }
}
