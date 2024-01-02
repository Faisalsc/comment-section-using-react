import React from 'react';
import './index.css';
import CommentSectionComponent from '../src/comments-section/commentSection';

export const CommentSection = ({
  commentData,
  currentUserId,
  classNameProps,
  onSubmitAction,
  onDeleteAction,
  onReplyAction,
  onEditAction,
}) => {
  return (
    
      <CommentSectionComponent
      commentData={commentData}
      currentUserId={currentUserId}
      onEditAction={onEditAction}
      onReplyAction={onReplyAction}
      onSubmitAction={onSubmitAction}
      onDeleteAction={onDeleteAction}
      classNameProps={classNameProps}
      />
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
