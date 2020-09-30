import React, { Component } from 'react';

class TableOfContext extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
      lists.push(<li key={data[i].id}><a href = {"/content/"+data[i].id}>{data[i].title}</a></li>)
        i++;
      }
      //li안에 key로 고유값을 설정해줘야 devtool에서 error가 안뜸
      return(
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