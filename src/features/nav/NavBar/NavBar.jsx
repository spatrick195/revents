import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { SignedOutMenu } from "../Menus/SignedOutMenu";
import { SignedInMenu } from "../Menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  // set the authentication state to true when called
  handleSignIn = () => this.setState({ authenticated: true });
  // set the authentication state to false when called
  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} exact to="/" header>
            <img src="/assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />

          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {/* If authenticated is true, then display signed in menu, if not show the signed out  menu */}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

// access to this.props.history so it can redirect the user with this.props.history.push.
export default withRouter(NavBar);
