import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableOfContext from './Components/tableofcontext';
import Subject from './Components/Subject';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';
import Control from './Components/Control';


class App extends Component {
  constructor(props) {//render전에 state값 초기화
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
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
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id)
        return data;
      i++;
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent
        onSubmit={function (_title, _desc) {
          this.max_content_id++;
          var newContents = this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc });
          this.setState({
            contents: newContents,
            mode:'read',
            selected_content_id: this.max_content_id,
          });
        }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      var getContent = this.getReadContent();
      _article = <UpdateContent
        data={getContent}
        onSubmit={function (_id, _title, _desc) {
          var newContents = Array.from(this.state.contents);
          var i = 0;
          while(i < newContents.length){
            if(newContents[i].id === _id){
              newContents[i] = { id: _id, title: _title, desc: _desc };
              break;
            }
            i++;
          }
          this.setState({
            contents: newContents,
            mode:'read',
            selected_content_id: i,
          });
        }.bind(this)}></UpdateContent>
    return _article;
  }
}

  render() {//어떤 HTML을 만드는 가를 담당
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState(
              { mode: 'welcome' }
            );
          }.bind(this)}></Subject>
        <TableOfContext
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }.bind(this)}
        ></TableOfContext>
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}
        ></Control>
        {this.getContent()} {/*Content 컴포넌트의 변수화*/}
      </div>
    );
  }
}

export default App;
