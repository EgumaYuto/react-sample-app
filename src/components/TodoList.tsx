import * as React from "react";
import {Todo} from "./Todo";

export class TodoList extends React.Component {

    render() {
        return (
            <ul>
                <li>
                    <Todo />
                </li>
                <li>
                    <Todo />
                </li>
                <li>
                    <Todo />
                </li>
            </ul>
        )
    }
}