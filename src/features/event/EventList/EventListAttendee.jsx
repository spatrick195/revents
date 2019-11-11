import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    // again, we assign attendee to the object props for reusability
    const { attendee } = this.props;
    return (
      <List.Item>
        <Image as="a" size="mini" circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendee;
