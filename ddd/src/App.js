import React, {Component} from 'react';
import './App.css';
import getBy from './queries/queries'

class App extends Component {
  render() {
    return (
      <div className="wsie-container">
        <h1 className='header'>Don't Dine and Die</h1>
        <div className='random-restaurant'>Random Restaurant</div>
        <div className='random-violation'>Rats! Rats! Rats! Rats!</div>
        <div className='front-page-buttons'>
          <button className='button-another'>Give Me Another</button>
          <button onClick={getBy.getByZip}>Near Me</button>
        </div>
      </div>
    );
  }
}
export default App;