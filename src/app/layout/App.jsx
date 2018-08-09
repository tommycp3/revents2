import React, { Component } from 'react';
import ButtonExampleButton from '../../Component';
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <EventDashboard />
      </div>
    );
  }
}

export default App;
