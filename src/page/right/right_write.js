import React, { Component } from 'react';
import '../main.css';
import axios from 'axios';

class right_write extends Component {
  constructor(props) {
    super(props);
    this.state={
        title : "",
        contents: "",
    }
  }

  _submitBoard = async function(){
      const title_v= document.getElementsByName('title')[0].value.trim();
      const contents_v= document.getElementsByName('contents')[0].value.trim();

      if(title_v===""){
          return alert('제목을 입력해주세요');
      }else if(contents_v ===""){
          return alert('내용을 입력해주세요');
      }
      const data ={title:title_v, contents : contents_v};
      const res = await axios('http://localhost:3001/add/board',{
          method: 'POST',
          data : data,
          headers : new Headers()
      })

      if(res.data){
          alert('글 등록이 완료되었습니다.');
          return window.location.replace('/')
      }
  
  }

  render() {
    return (
        <div>
          <div id='post_submit'>
            <button onClick ={()=>this._submitBoard()}> 포스트 등록 </button>
          </div>
        </div>
    );
  }
}

export default right_write;

