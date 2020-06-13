// import React, { useState } from "react";

// function Aaa() {
//   const [task, setTask] = useState("");
//   const listArr = [];

//   return (
//     <section id="main">
//       <h3 id="header">Todos</h3>
//       <div>
//         <input
//           placeholder="Add task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button
//           id="btn"
//           onClick={function add() {
//             const list = [...listArr];
//             const listItem = {
//               id: 1 + Math.random(),
//               value: task,
//             };

//             listItem.value === ""
//               ? alert("Please add a task to do")
//               : list.push(listItem);
//           }}
//         >
//           Add
//         </button>
//       </div>
//       <ul>
//         {listArr.map((i) => {
//           return <li key={i}>{i.value}</li>;
//         })}
//       </ul>
//     </section>
//   );
// }

// export default Aaa;
