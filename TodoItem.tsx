import React = require('react');

export type TodoItemProps = {};

export const TodoItem = ({}: TodoItemProps) => (
  <div className="todo-item">
    <img src="https://picsum.photos/id/1/200" alt="" />
    <p>This is a TODO item</p>
  </div>
);
