import React, { Component } from "react";

import axios from "axios";

export class Home extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    console.log("componentWillMount");
    //console.log(this.state.data);
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(response => console.log(response));
    console.log("componentDidMount");
  }

  // listdata = (item, i) => (
  //   <div key={i}>
  //     <li>{item.title}</li>
  //   </div>
  // );

  // listdatabigning = () =>
  //   this.state.data
  //     ? this.state.data.map((item, i) => {
  //         return this.listdata(item, i);
  //       })
  //     : null;

  render() {
    console.log(this.state.data);
    return (
      <div>
        {/* {this.listdatabigning()} */}
        <ul>
          {this.state.data.map((item, i) => (
            <li key={i}>{item.title}</li>
          ))}
        </ul>
        <h1> Yellow </h1>
      </div>
    );
  }
}

export default Home;
