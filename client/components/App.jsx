// import React from "react";
import React, { Component } from 'react';

// Pdf component
import Pdf from "./Pdf";

// character sheet imports
import Fighter from "../assets/dnd/Human Fighter 1.pdf";
import Wizard from "../assets/dnd/High Elf Wizard 10.pdf";
import Compendium from "../assets/lancer/Lancer - Free Version.pdf"
import Samurai from "../assets/pathfinder/Pathfinder-Level-7-Samurai.pdf"
import Guardian from "../assets/star wars/Jalum Voss.pdf"
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/

import "../styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdf: Wizard, 
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({pdf: event.target.value})
  }

  render() {
    return(
      <div className="App">

        <div id="title">One-Stop Tabletop</div>

        <div id="mySidenav" class="sidenav">
          <button class="dropdown-btn" id="dnd">DND 5E</button>
          <div class="dropdown-container">
            <button class="charactersheet" onClick={this.handleClick} value={Fighter}>Fighter</button>
            <button class="charactersheet" onClick={this.handleClick} value={Wizard}>Wizard</button>
            {/* <a href= {Wizard} target = "_blank">Wizard</a> */}
          </div>

          <button class="dropdown-btn" id="pathfinder">Star Wars 5E</button>
          <div class="dropdown-container">
            <button class="charactersheet" onClick={this.handleClick} value={Guardian} >Jalum Voss</button>
            {/* <a href= {Guardian} target = "_blank">Jalum Voss</a> */}
          </div>

          <button class="dropdown-btn" id="lancer">Lancer</button>
          <div class="dropdown-container">
            <button class="charactersheet" onClick={this.handleClick} value={Compendium}>Compendium</button>
            {/* <a href= {Compendium} target = "_blank">Compendium</a> */}
          </div>

          <button class="dropdown-btn" id="pathfinder">Pathfinder</button>
          <div class="dropdown-container">
            <button class="charactersheet" onClick={this.handleClick} value={Samurai}>Samurai</button>
            {/* <a href= {Samurai} target = "_blank">Samurai</a> */}
          </div>

        </div>

       
        <div id="PDFdisplay">
          <Pdf pdf={this.state.pdf} />
        </div>
      
      </div>
    );
  }
}
export default App;
