/** @jsx React.DOM */

module React from 'react';
import { CommentBox } from './CommentBox';

React.renderComponent(
  <CommentBox url="http://localhost:3001/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
