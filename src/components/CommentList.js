import React from 'react';
import Comment from './Comment.js';

class CommentList extends React.Component {
  render() {

    const commentComponents = this.props.data.map((comment, index) => {
      return <Comment title ={comment.title} key = {index}
        showTime = {comment.showTime}> </Comment>
    })

    return (
      <div className = "comment-list">
        {commentComponents}
    </div>
    )
  }
}

export default CommentList;
