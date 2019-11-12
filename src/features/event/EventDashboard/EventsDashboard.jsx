import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventsDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false
  };

  // toggle function for our isOpen state.
  // when it is called, set it opposite to its current value.. which will be true/false as it is a boolean
  handleIsOpenToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";

    // spread operator
    // use the events from our state, and add our current array of events to it.
    this.setState(({ events }) => ({
      events: [...events, newEvent]
    }));
  };

  render() {
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          {/* on click, call the handleFormOpen arrow function */}
          <Button
            onClick={this.handleIsOpenToggle}
            positive
            content="Create Event"
          />
          {/*If the first object is falsy, it returns that object. If it is
          truthy, it returns the second object. Source:
          https://www.nfriedly.com/techblog/2009/07/advanced-javascript-operators-and-truthy-falsy/*/}
          {/* EventForm is a child component of the EventFormDashboard, we are changing it from the child component and thus affecting the state in the parent component(EventsDashboard.jsx) this is what is referred to as inverse data flow*/}
          {isOpen && (
            <EventForm
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleIsOpenToggle}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
// ww
export default EventsDashboard;
