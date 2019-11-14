import React, { Component } from "react";
import { Segment, Item, List, Icon, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props; // this is so it makes the code easier to read and so that we dont have to keep re-using 'this.props'
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted by {event.hostedBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* If there are attendees, do what is to the right of the double ampersands  
            DETAILED: "truthy" and "falsy". These terms are a way of describing non-boolean values by how they are converted to booleans by the language. For example, when inside a conditional, JavaScript treats 0 as false and any other number as true. Similarly, empty strings ("") are falsy, while any other string is truthy. Objects and arrays are always truthy, while null, NaN, and undefined are falsy. 
            This is why if attendees are '0' then it is false, so ignore this part. If it is greater than 0, then do what is to the right of the double ambersands*/}
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={() => deleteEvent(event.id)}
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
