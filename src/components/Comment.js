import React from 'react';

// class Comment extends React.Component{

const Comment = (props) => {
  return (
    <div className = "comment">
      <h4> {props.title}</h4>
      <p> {props.showTime} </p>
    </div>
  )
}

export default Comment;
