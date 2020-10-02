import React, { Component } from 'react';

class TableOfContext extends Component {
  shouldComponentUpdate(newProps, newState){
     //굳이 render가 필요하지 않을 때, 이를 통제
     //매개변수 : newProps, newState : 새롭게 바뀐 값과 이전 값에 접근가능.
    if(this.props.data === newProps.data) return true;
    else return false;
  }
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            onClick={function (id, e) {//여기
              e.preventDefault();
              this.props.onChangePage(id); //App.js의 onChangePage를 실행시킴.
            }.bind(this, data[i].id)} 
            //bind의 두번째 인자로 넣어주고, function의 맨앞에 인자로 넣어줌. 
            //새로 인자가 들어올때 마다 이때 e는 한칸 밀림.
          >
            {data[i].title}</a></li >)
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