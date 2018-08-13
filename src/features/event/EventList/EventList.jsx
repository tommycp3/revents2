import React, { Component } from "react";
import EventListItem from "../EventList/EventListItem";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {events.map((event) => (
            <EventListItem />
        
        ))}
      </div>
    );
  }
}

export default EventList;
