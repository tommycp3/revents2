import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import EventListAttendee from "../../features/event/EventList/EventListAttendee.jsx";
import EventList from "../../features/event/EventList/EventList";
import EventListItem from '../../features/event/EventList/EventListItem'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
          <EventListAttendee />
          <EventList />
          <EventListItem />
        </Container>
      </div>
    );
  }
}

export default App;
