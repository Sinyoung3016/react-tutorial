import React from "react";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false});
    }, 6000);
    //mount 6초 후, isLoading 값은 false
  };
  render(){
    const { isLoading } = this.state;
    return (
    <div>{ isLoading ? "Loading" : "We are ready"}</div>
    );
  };
}

export default App;


