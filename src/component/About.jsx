import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/DevRoopeshSingh");
    const jsonData = await data.json();
    console.log("Inside the About page", jsonData);
    this.setState({ userInfo: jsonData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("Run this line of code", prevState.count);
    }
    console.log("Component Did Update in About page");
  }



  render() {
    return (
      <div className="about-page">
        <h1>About Page</h1>
        <h2>This is About react Page</h2>
        <h3>Count:{this.state.count}</h3>
        <button
         
          onClick={() =>
            this.setState(
              { count: this.state.count + 1 },
              console.log("State has been changed")
            )
          }
          className="btn-click bg-slate-200 p-2 m-2 rounded-md"
        >
          Button
        </button>
    
        <UserClass userInfo={this.state.userInfo} />
        <User userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default About;
