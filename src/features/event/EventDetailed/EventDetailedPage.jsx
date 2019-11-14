import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.length > 0) {
    // returns a new array, even if only one item in the array so we index at 0
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

export const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        {/* EventDetailedHeader component */}
        <EventDetailedHeader event={event} />
        {/* EventDetailedInfo component */}
        <EventDetailedInfo event={event} />
        {/* EventDetailedChat component */}
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* EventDetailedSideBar component */}
        <EventDetailedSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
