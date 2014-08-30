/** @jsx React.DOM */

module React from 'react';
import { CommentBox } from './CommentBox';

React.renderComponent(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
