// import React from "react";
// import StartFirebase from "../../services/FirebaseConfig";
// import { ref, set, get, update, remove, child } from "firebase/database";

// export class Crud extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       db: "",
//       username: "",
//       fullname: "",
//       phonenumber: "",
//       dob: "",
//     };
//     this.interface = this.interface.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       db: firebaseConfig(),
//     });
//   }

//   render() {
//     return (
//       <>
//         <form className="crud-container">
//           <label> Nome </label>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={(e) => {
//               this.setState({ username: e.target.value });
//             }}
//           />

//           <label> Sobrenome </label>
//           <input
//             type="text"
//             value={this.state.fullname}
//             onChange={(e) => {
//               this.setState({ fullname: e.target.value });
//             }}
//           />

//           <label> Telefone </label>
//           <input
//             type="text"
//             value={this.state.phonenumber}
//             onChange={(e) => {
//               this.setState({ phonenumber: e.target.value });
//             }}
//           />

//           <label> DOB </label>
//           <input
//             type="text"
//             value={this.state.dob}
//             onChange={(e) => {
//               this.setState({ dob: e.target.value });
//             }}
//           />

//           <button onClick={this.interface} id="addBtn" className="crud-btn">
//             Enviar recomendação
//           </button>
//         </form>
//       </>
//     );
//   }

//   interface(event) {
//     const id = event.target.id;

//     if (id == "insertBtn") {
//       this.insertData();
//     }
//   }
//   getAllInputs() {
//     return {
//       username: this.state.username,
//       name: this.state.fullname,
//       phone: this.state.phonenumber,
//       dob: this.state.dob,
//     };
//   }

//   insertData() {
//     const db = this.state.db;
//     const data = this.getAllInputs();

//     set(ref(db, "Customer/" + data.username), {
//       Fullname: data.name,
//       Phonenumber: data.phone,
//       dateofbirt: data.dob,
//     });
//   }
// }
