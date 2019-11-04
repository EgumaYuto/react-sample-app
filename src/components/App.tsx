import * as React from "react";
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";
import * as ShortId from "shortid";

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
  render() {
      return (
          <div>
              <h1>React Sample App</h1>
              <TodoForm />
              <TodoList todoList={[
                  {
                    id: ShortId.generate(),
                    title: 'hoge',
                  },
                  {
                    id: ShortId.generate(),
                    title: 'huga',
                  }
              ]} />
          </div>
      );
  }
}
