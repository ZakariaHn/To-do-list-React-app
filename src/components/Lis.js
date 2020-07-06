import React, { Fragment, useState } from "react";
import UserList from "./UserList";

const Lis = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const changeHandel = (e) => {
    setUserInput({ userInput: e.target.value.trim() });
  };

  const add = (e) => {
    e.preventDefault();
    setUserInput("");
    setList([...list, { id: list.length, title: userInput, done: false }]);
  };

  const remove = (itemToRemove) => {
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList({
      list: newArr,
    });
  };

  const check = (itemToCheck) => {
    const newArr = list.filter((item) => {
      if (item.id === itemToCheck) {
        item.done = !item.done;
      }
      return item;
    });

    setList({
      list: newArr,
    });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="datafield">
          <div className="heading">
            <h3>To Do</h3>
          </div>
          <form className="user" onSubmit={add}>
            <input
              type="text"
              id="userText"
              value={userInput}
              onChange={changeHandel}
              placeholder="type something"
            />
            <input className="button" type="submit" value="" />
          </form>
          <UserList list={list} remove={remove} check={check} />
        </div>
      </div>
    </Fragment>
  );
};

export default Lis;
