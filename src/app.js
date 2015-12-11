import React from "react";
import { render } from "react-dom";
import Input from "./components/Input";

const App = React.createClass({
  getInitialState() {
    return {
      text: ""
    };
  },
  render() {
    const { text } = this.state;
    return (
      <div>
        <div className="container" >
          <div className="row">
            <div className="col-xs-12">
              <Input type="text" name="text" placeholder="text" />
              <Input type="number" name="number" placeholder="number" />
              <Input type="checkbox" name="checkbox" placeholder="checkbox" />
              <Input type="file" name="file" placeholder="file" />
              <Input type="textarea" name="textarea" placeholder="textarea" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

render(
  <App />
, document.querySelector("#root"));
