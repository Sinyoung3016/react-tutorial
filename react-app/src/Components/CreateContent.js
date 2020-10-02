import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
              onSubmit = {function(e){
                e.preventDefault(); //원래 form태그는 action으로 페이지가 이동. 
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value);
              }.bind(this)}
              >
                {/*action : 해당 정보를 여기다 전송할 것임.
                  onSubmit : form태그 안의 summit을 클릭하면, 해당 함수가 돌아감.*/}
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="desc" placeholder="description"></textarea></p>
                <p><input type="submit"></input></p>
                </form>
          </article>
      );
    }
  }

export default CreateContent;
  