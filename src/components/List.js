// import React from "react";
// import UserList from "./UserList";

// export default class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: "",
//       list: [],
//     };
//   }

//   changeHandel = (e) => {
//     this.setState({ userInput: e.target.value.trim() });
//   };

//   add = (e) => {
//     e.preventDefault();
//     const userText = this.state.userInput;
//     this.setState({
//       userInput: "",
//       list: [
//         ...this.state.list,
//         { id: this.state.list.length, title: userText, done: false },
//       ],
//     });
//   };

//   remove = (itemToRemove) => {
//     const newArr = this.state.list.filter((item) => item.id !== itemToRemove);
//     this.setState({
//       list: newArr,
//     });
//   };

//   check = (itemToCheck) => {
//     const newArr = this.state.list.filter((item) => {
//       if (item.id === itemToCheck) {
//         item.done = !item.done;
//       }
//       return item;
//     });

//     this.setState({
//       list: newArr,
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="container">
//           <div className="datafield">
//             <div className="heading">
//               <h3>To Do</h3>
//             </div>
//             <form className="user" onSubmit={this.add}>
//               <input
//                 type="text"
//                 id="userText"
//                 value={this.state.userInput}
//                 onChange={this.changeHandel}
//                 placeholder="type something"
//               />
//               <input className="button" type="submit" value="" />
//             </form>
//             <UserList
//               list={this.state.list}
//               remove={this.remove}
//               check={this.check}
//             />
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
