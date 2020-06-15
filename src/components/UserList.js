import React from "react";

const UserList = (props) => {
  const todos = props.list.map((item, i) => (
    <li key={i}>
      <input type="checkbox" checked={item.checked} />
      {item}
      <i
        onClick={() => {
          props.del(item);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{todos}</ul>;
};

export default UserList;
