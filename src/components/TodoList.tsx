import * as React from "react";
import {Todo} from "./Todo";
import {TodoViewModel} from "./App";

interface Props {
    todoList: Array<TodoViewModel>
    removeTodo: (id: string) => void
}

export class TodoList extends React.Component<Props> {

    render() {
        return (
            <ul>
                {
                    this.props.todoList.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <Todo todo={todo} handleRemove={this.props.removeTodo} />
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}