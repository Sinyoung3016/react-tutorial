import React, { Component } from 'react';

class Subject extends Component{
    render(){ //class 안의 function은 생략
      return ( //컴포넌트는 하나의 최상위 태그로만 시작해야함.
        //tag => attribute, react => props
        <header> 
          <h1><a href = "/">{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );  
    }
  }

export default Subject;
  