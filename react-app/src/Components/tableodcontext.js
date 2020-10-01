import React, { Component } from 'react';

class TableOfContext extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-idid = {data[i].id}
            onClick={function (e) {
              var selected_id = e.target.dataset.idid; 
              //e의 속성중 target은 해당 tag를 가르킴. 이를 통해 data의 id에 접근 가능 
              e.preventDefault();
              this.props.onChangePage(selected_id); //App.js의 onChangePage를 실행시킴.
            }.bind(this)}
          >{data[i].title}</a></li >)
      i++;
    }
    //li안에 key로 고유값을 설정해줘야 devtool에서 error가 안뜸
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TableOfContext;
  //해당 클래스를 가져다 사용할 수있음.