import * as React from "react";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";
import {TodoViewModel} from "./TodoViewModel";

interface TodoState {
    todoList: Array<TodoViewModel>
}

export class TodoComponent extends React.Component<{}, TodoState> {

  constructor(props: {}) {
      super(props);
      this.state = {todoList: []};
  }

  addTodo = (todo: TodoViewModel): void => {
      const todoList: Array<TodoViewModel> = this.state.todoList;
      todoList.push(todo);
      this.setState({
          todoList: todoList
      });
  };

  removeTodo = (id: string): void => {
      const todoList: Array<TodoViewModel> = this.state.todoList;
      this.setState({
          todoList: todoList.filter(todo => todo.id != id)
      });
  };

  render() {
      return (
          <div>
              <h1>React Todo App</h1>
              <TodoForm onTodoSubmit={this.addTodo} />
              <TodoList todoList={this.state.todoList} removeTodo={this.removeTodo} />
          </div>
      );
  }
}
