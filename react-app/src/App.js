import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableOfContext from './Components/tableodcontext';
import Subject from './Components/Subject';
import Content from './Components/Content';


class App extends Component {
    render(){
      return (
        <div className="App" > 
        <center>
          <Subject title="WEB" sub="world wide web!"></Subject></center>
          <Subject title="React" sub="For UI"></Subject>
          <TableOfContext></TableOfContext>
          <Content title="HTML" desc="  HTML is Hypertext MarkUp Language."></Content>
        </div>
    );
   }
}

export default App;
