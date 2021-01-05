import React, { Component } from 'react';

class UpdateContent extends Component{

  constructor(props){
    super(props);
    this.state = {
      id : this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    }
    this.inputformHandler = this.inputformHandler.bind(this); //바인딩을 생성자에서 전부처리
  }

  inputformHandler(e){
    this.setState({
      [e.target.name] : e.target.value, //대괄호 : Target의 name값이 오게됨.
    });
  }
    render(){
      return(
        <article>
              <h2>Update</h2>
              <form 
              action="/create_process" method="post"
              onSubmit = {function(e){
                e.preventDefault(); //원래 form태그는 action으로 페이지가 이동. 
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc,
                  );
              }.bind(this)}
              >
              {/*action : 해당 정보를 여기다 전송할 것임.
                onSubmit : form태그 안의 summit을 클릭하면, 해당 함수가 돌아감.*/}
              <p><input type="hidden" name ="id" value={this.state.id}></input></p>
                <p><input 
                type="text" name="title" placeholder="title"
                value={this.state.title}
                onChange={this.inputformHandler}
                ></input></p>
                <p><textarea name="desc" placeholder="description"
                value={this.state.desc}
                onChange={this.inputformHandler}
                ></textarea></p>
                <p><input type="submit"></input></p>
                </form>
          </article>
      );
    }
  }

export default UpdateContent;
  