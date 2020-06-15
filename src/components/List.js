import React from "react";
import UserList from "./UserList";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  changeHandle = (e) => {
    this.setState({ userInput: e.target.value });
  };

  add = (e) => {
    e.preventDefault();
    const userText = this.state.userInput;
    this.setState({
      userInput: "",
      list: [...this.state.list, userText],
    });
  };
  remove = (itemToRemove) => {
    const newArr = this.state.list.filter((item) => item !== itemToRemove);
    this.setState({
      list: newArr,
    });
  };
  render() {
    return (
      <React.Fragment>
        <form id="list-form" onSubmit={this.add}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandle}
            placeholder="Write Task"
          />
          <input type="submit" value="Add" />
        </form>
        <UserList list={this.state.list} del={this.remove} />
      </React.Fragment>
    );
  }
}
