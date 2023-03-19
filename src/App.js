// import React,{ Component, createElement} from 'react';
// let e1 = createElement("h1",null, "gautam singh");
// export  default e1; 
import React, { Component } from 'react';
//import Header from './Components/Header';
import './App.css';

class App extends Component {
render() {
	return (
	<div className="home">
	<h1>Lets Start <br /> with<br /> Blockcept.ai</h1>
  <input type="email" class="input" name="email" placeholder='enter email'></input>
  <input type='button' class="input1" name="submit" value="submit"></input>
	</div>
	);
}
}

export default App;

