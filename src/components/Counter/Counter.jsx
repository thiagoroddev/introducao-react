import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0, name: "", password: "" };
  }

  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>

        <div>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            + Aumentar
          </button>

          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            - Diminuir
          </button>
        </div>

        <form style={{ margin: "30px" }}>
          <input
            type="text"
            placeholder="nome"
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          ></input>
          <input
            type="password"
            placeholder="senha"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
