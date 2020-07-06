import React from "react";

const UserList = (props) => {
  const { list, check, remove } = props;
  const toDos = list.map((item) => (
    <div className="list">
      <ul className="listing">
        <li key={item.id}>
          <input
            className="checkbox"
            type="checkbox"
            value={item.done}
            onChange={() => {
              check(item.id);
            }}
          />
          {item.title}
          <i
            onClick={() => {
              remove(item.id);
            }}
          >
            🗑
          </i>
        </li>
      </ul>
    </div>
  ));
  return <ul>{toDos}</ul>;
};

export default UserList;
