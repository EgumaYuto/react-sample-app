import * as React from "react";

export interface AppProps { }

export class App extends React.Component<AppProps, {}> {
  render() {
      return (
          <div>
              <h1>React Sample App</h1>
              <form>
                  <textarea />
                  <button type={"submit"} >Submit</button>
              </form>
              <ul>
                  <li>
                      <form>
                          <label>
                            <input type={"checkbox"} />
                            Todo
                          </label>
                      </form>
                  </li>
                  <li>
                      <form>
                          <label>
                            <input type={"checkbox"} />
                            Todo
                          </label>
                      </form>
                  </li>
                  <li>
                      <form>
                          <label>
                            <input type={"checkbox"} />
                            Todo
                          </label>
                      </form>
                  </li>
              </ul>
          </div>
      );
  }
}
