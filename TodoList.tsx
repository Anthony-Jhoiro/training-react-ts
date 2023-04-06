import React = require('react');
import { LoadingIndicator } from './LoadingIndicator';
import { TodoItem } from './TodoItem';

export type TodoListProps = {};

export const TodoList = ({}: TodoListProps) => (
  <main>
    <LoadingIndicator />
    <ul>
      <li>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </li>
    </ul>
  </main>
);
