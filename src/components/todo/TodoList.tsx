import * as React from "react";
import {TodoItem} from "./TodoItem";
import {TodoViewModel} from "./TodoViewModel";


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
                                <TodoItem todo={todo} handleRemove={this.props.removeTodo} />
                            </li>
                        );
                    })
                }
            </ul>
        )
    }
}