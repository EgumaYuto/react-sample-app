import * as React from "react";
import {Todo} from "./Todo";

interface Props {
    todoList: Array<{
        id: string
        title: string
    }>
}

export class TodoList extends React.Component<Props> {

    render() {
        return (
            <ul>
                {
                    this.props.todoList.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <Todo title={todo.title} />
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}