import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventList/EventList";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

const mapState = state => ({
  events: state.events // our array of events that we get from state
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventsDashboard extends Component {
  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    // destructuring
    // get the events from props instead of state
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventsDashboard);
