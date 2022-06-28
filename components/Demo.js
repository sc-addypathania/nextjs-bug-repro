import { withComponentFactory } from "../context/GlobalState";
import React from "react";

class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // props not getting logged on the console.
    // They get logged on client side.
    console.log(this.props);

    return <h2>Hello</h2>;
  }
}

export const Demo1 = withComponentFactory(Demo);
