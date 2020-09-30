import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableOfContext from './Components/tableodcontext';
import Subject from './Components/Subject';
import Content from './Components/Content';


class App extends Component {
  constructor(props){//render전에 state값 초기화
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is hyper...'},
        {id:2, title:'CSS', desc:'CSS is design...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'},
        ]
    }
    //App, 상위 컴포넌트에서 Subject, 하위 컴포넌트로 전달
  }

    render(){
      return (
        <div className="App" > 
        <center>
          <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          ></Subject></center>
          <Subject title="React" sub="For UI"></Subject>
          <TableOfContext data = {this.state.contents}></TableOfContext>
          <Content title="HTML" desc="  HTML is Hypertext MarkUp Language."></Content>
        </div>
    );
   }
}

export default App;
