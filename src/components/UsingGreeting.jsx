import React, { Component } from "react";

export class UsingGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <section>
        {isLoggedIn ? (
          <div className="welcome-message">Welcome Wishwas!</div>
        ) : (
          <div className="welcome-message">Welcome Guest</div>
        )}
      </section>
    );
  }
}

export default UsingGreeting;
