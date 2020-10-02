import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableOfContext from './Components/tableofcontext';
import Subject from './Components/Subject';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import Control from './Components/Control';


class App extends Component {
  constructor(props) {//render전에 state값 초기화
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id : 2,
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
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
    }else if (this.state.mode === 'create') {
      _article = <CreateContent 
      onSubmit={function(_title, _desc){
       this.max_content_id++;
       var newContents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
       //원본 데이터를 바꾸지 않아야 나중에 성능개선에 편리함. 따라서 push가 아니라 concat을 써서 원본 파일 보존
       this.setState({
         contents: newContents,
       });
        
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage = {function (){
          this.setState(
            {mode:'welcome'}
          );
        }.bind(this)}></Subject>
        <TableOfContext 
        data={this.state.contents}
        onChangePage = {function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id),
          });
        }.bind(this)}
        ></TableOfContext>
        <Control 
        onChangeMode = {function (_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}
        ></Control>
        {_article} {/*Content 컴포넌트의 변수화*/}
      </div>
    );
  }
}

export default App;
