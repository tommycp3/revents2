import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Image } from "semantic-ui-react";
import EventListAttendee from "../EventList/EventListAttendee";

class EventListItem extends Component {
  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image
                  size="tiny"
                  circular
                  src="https://content.screencast.com/users/tommycp2/folders/Snagit/media/5e5b3165-b840-40e3-879d-f5021c91cdb1/2018-08-10_17-52-59.png"
                />
                <Item.Content>
                  <Item.Header as="a">Event Title</Item.Header>
                  <Item.Description>
                    Hosted by <a>hosted by</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>

          <Segment>
            <span>
              <Icon name="clock" /> date |<Icon name="marker" /> time
            </span>
          </Segment>

          <Segment secondary>
            <List horizontal>
              <EventListAttendee />
              <EventListAttendee />
              <EventListAttendee />
              <EventListAttendee />
            </List>
          </Segment>

          <Segment clearing>
            <span>Description will go here</span>
            <Button as="a" color="teal" floated="right" content="View" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default EventListItem;
