import React from 'react';
import CommentList from '../components/CommentList.js';

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { title: "Lord of The rings",
        showTime: "10 am"
      },
        { title: "Star wars",
        showTime: "2pm"
      },
        { title: "Eviltimes",
        showTime: "5pm"
      }
    ]
  }
}
render() {
  return (
    <div>
      <CommentList data = {this.state.data}/>
    </div>
  )
}

}

export default CommentBox;
