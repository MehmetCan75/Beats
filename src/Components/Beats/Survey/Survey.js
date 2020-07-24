import React, { Component } from "react";
import axios from "axios";

//CSS
import './Survey.css'

export default class Survey extends Component {
  state = {
    song: "",
    counter: 0,
    Merci: "",
    type: "submit",
    disabled: false,
  };

  handleChange = (event) => {
    this.setState({ song: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let counter = 0;
    counter += 1
    const songs = {
      song: this.state.song,
      counter: counter
    };
    axios
      .post(`https://beats-f9a6f.firebaseio.com/beats.json`, songs )
      .then((res) => {
        console.log(res);
        this.setState({ Merci: "Thank you", type: "hidden", disabled: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="favorite">
        <h2>Quel est votre Beat préféré ?</h2>

        <form onSubmit={this.handleSubmit} className="form">
          <select value={this.state.value} onChange={this.handleChange} className="options">
            <option selected disabled>
              Choisissez un Beat
            </option>
            <option value="NO SE">NO SE</option>
            <option value="TRAPZ">TRAPZ</option>
            <option value="JBLV">JBLV</option>
            <option value="SPACE">SPACE</option>
            <option value="Hope">Hope</option>
            <option value="Charlie's Angel">Charlie's Angel</option>
            <option value="Life">Life</option>
            <option value="Gang">Gang</option>
            <option value="Sun">Sun</option>
            <option value="Funk Brasileiro">Funk Brasileiro</option>
            <option value="Gonna be alright">Gonna be alright</option>
          </select>
          {this.state.song ?
          <input
            type={this.state.type}
            value="Envoyer"
            disabled={this.state.disabled}
            style={{color:"white"}}

          /> : 
            <input
            type={this.state.type}
            value="Envoyer"
            disabled={!this.state.disabled}
            style={{color:"black", opacity: "0.5"}}
          />
           }
        </form>
        <p className="Merci">
          {this.state.Merci ? "Merci" : null}
        </p>
      </div>
    );
  }
}

