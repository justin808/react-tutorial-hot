/** @jsx React.DOM */

var CommentBox = require('./CommentBox'),
    React = require('react');

React.renderComponent(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
