import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
      list: [],
    };
  }

  add() {
    const list = [...this.state.list];
    const listItem = {
      id: 1 + Math.random(),
      value: this.state.task,
    };

    listItem.value === ""
      ? alert("Please add a task to do")
      : list.push(listItem);

    this.setState({
      list,
      task: "",
    });
  }

  handleInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <section id="main">
        <h3 id="header">Todos</h3>
        <div>
          <input
            placeholder="Add task"
            value={this.state.task}
            onChange={(e) => this.handleInput("task", e.target.value)}
          />
          <button id="btn" onClick={() => this.add()}>
            Add
          </button>
        </div>
        <ul>
          {this.state.list.map((i) => {
            return <li key={i}>{i.value}</li>;
          })}
        </ul>
      </section>
    );
  }
}
export default App;
