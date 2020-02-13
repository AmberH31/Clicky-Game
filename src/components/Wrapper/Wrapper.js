import React from "react";
import "./Wrapper.css";

// class Wrapper extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //   }
//   render() {
//     return <div>{this.props.content}</div>;
//   }
// }
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
