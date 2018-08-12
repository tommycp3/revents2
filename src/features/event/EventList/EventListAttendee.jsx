import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
        <Image as="a" size="mini" circular src="https://content.screencast.com/users/tommycp2/folders/Snagit/media/5e5b3165-b840-40e3-879d-f5021c91cdb1/2018-08-10_17-52-59.png" />
      </List.Item>
    );
  }
}

export default EventListAttendee;
