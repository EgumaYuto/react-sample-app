import * as React from "react";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
  render() {
      return (
          <div>
              <h1>React Sample App</h1>
              <TodoForm />
              <TodoList />
          </div>
      );
  }
}
