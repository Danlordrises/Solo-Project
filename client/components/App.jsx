// import React from "react";
import React, { Component } from 'react';
import Pdf from "./Pdf";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../assets/dnd/High Elf Wizard 10.pdf";

import "../styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
      {/* <div class="flex-container"> */}
        <div id="mySidenav" class="sidenav">
          <a href="dnd" id="dnd">DND 5E</a>
          <a href="lancer" id="lancer">Lancer</a>
          <a href="pathfinder" id="pathfinder">Pathfinder</a>
        </div>

        {/* <div class="flex-child"> */}
        <div>
          <Pdf pdf={samplePDF} />
        </div>

      {/* </div> */}
      
    </div>
    );
  }
}
export default App;

// export default function App() {
//   function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }



//   return (
    
    
//   );
// }

