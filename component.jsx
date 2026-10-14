import { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default function App() {
  return (
    <div>
      <Greeting name="Fahmi" />
      <Greeting name="React Learner" />
    </div>
  );
}
