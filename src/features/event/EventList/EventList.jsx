import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    // loop over events with props object
    // props is just an object which contains attributes + their values that have been passed from the parent component
    // we use prop for passing data in a function
    // e.g. we can get the data from a something like this <Greet name="Diana"/>
    // {this.props.name} ..
    // we then map this array by the es6 function 'map' (because 'event' is a list item, it is an array)
    return (
      <Fragment>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            selectEvent={selectEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
