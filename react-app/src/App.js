import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render(){
      return (
        <div className="App" > 
        <center>
          <Subject></Subject>
          </center>
          <TableOfContext></TableOfContext>
          <Content></Content>
        </div>
    );
   }
}

class Subject extends Component{
  render(){ //class 안의 function은 생략
    return ( //컴포넌트는 하나의 최상위 태그로만 시작해야함.
      <header>
        <h1>Web</h1>
        world wide web!
      </header>
    );  
  }
}

class TableOfContext extends Component{
  render(){
    return(
      <nav>
            <ul>
                <li><a href = "1.html">HTML</a></li>
                <li><a href = "2.html">CSS</a></li>
                <li><a href = "3.html">JavaScript</a></li>
            </ul>
        </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
            <h2>HTML</h2>
            HTML is Hypertext MarkUp Language.
        </article>
    );
  }
}

export default App;
