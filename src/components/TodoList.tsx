import * as React from "react";
import {Todo} from "./Todo";

export class TodoList extends React.Component {

    render() {
        return (
            <ul>
                <li>
                    <Todo title={"Todo1"} />
                </li>
                <li>
                    <Todo title={"Todo2"} />
                </li>
                <li>
                    <Todo title={"Todo3"} />
                </li>
            </ul>
        )
    }
}