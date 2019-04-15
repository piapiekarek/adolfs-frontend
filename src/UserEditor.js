import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

export default class UserView extends React.Component {
  render() {
    //const {variable} = this.props;
    const data = {
      users: [
        {
          firstname: "test1",
          lastname: "test1",
          email: "test@test.de",
          id: "test1",
          password: "test1",
          role: "supervisor"
        },
        {
          firstname: "test2",
          lastname: "test2",
          email: "test@test.de",
          id: "test2",
          password: "test2",
          role: "supervisor"
        },
        {
          firstname: "test3",
          lastname: "test3",
          email: "test@test.de",
          id: "test3",
          password: "test3",
          role: "supervisor"
        },
        {
          firstname: "test4",
          lastname: "test4",
          email: "test@test.de",
          id: "test4",
          password: "test4",
          role: "supervisor"
        }
      ]
    };

    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}
