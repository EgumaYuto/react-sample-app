import * as React from "react";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";

interface AppProps {}

interface AppState {
    todoList: Array<TodoViewModel>
}

export interface TodoViewModel {
    id: string
    title: string
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
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
              <h1>React Sample App</h1>
              <TodoForm onTodoSubmit={this.addTodo} />
              <TodoList todoList={this.state.todoList} removeTodo={this.removeTodo} />
          </div>
      );
  }
}
