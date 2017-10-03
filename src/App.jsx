import React, {Component} from 'react';

class App extends Component {
  render() {
    return (                  // insert <div> before h1 to wrap everything.
      <h1>Hello React :)</h1> // There can only be one root <>, so make it something
    );                        // ambiguous like a div
  }
}
export default App;
