import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableOfContext from './Components/tableodcontext';
import Subject from './Components/Subject';
import Content from './Components/Content';


class App extends Component {
  constructor(props) {//render전에 state값 초기화
    super(props);
    this.state = {
      mode: 'read',
      subject: { title: 'WEB', sub: 'world wide web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is hyper...' },
        { id: 2, title: 'CSS', desc: 'CSS is design...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is ...' },
      ]
    }
    //App, 상위 컴포넌트에서 Subject, 하위 컴포넌트로 전달
  }

  

  render() {//어떤 HTML을 만드는 가를 담당
    var _title, _desc = null;
    if (this.state.mode == 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode == 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App" >
        <header>
          <h1><a href="/" onClick={function (e) {
            alert("HI");
            e.preventDefault(); //해당 태그의 기본적인 동작 방법을 지움, 따라서 페이지 전환이 없음.
            //this.state.mode = 'welcome'; react가 변화를 인지 못함. 아래와 같이 해야함.
            this.setState({
              mode:'welcome',
            });
          }.bind(this)
          //render함수 안에서는 this는 컴포넌트, 
          //그러나 function 함수 안에서는 this의 값이 컴포넌트를 가르키지 않음 undefine. 
          //따라서 bind를 사용.
          //bind 첫번째 매개변수는 해당 객체를 의미하며, 해당 함수 안에서도 사용가능.
          }>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>

        <Subject title="React" sub="For UI"></Subject>
        <TableOfContext data={this.state.contents}></TableOfContext>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
