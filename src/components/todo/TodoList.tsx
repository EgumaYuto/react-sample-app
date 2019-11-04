import * as React from "react";
import {TodoItem} from "./TodoItem";
import {TodoViewModel} from "./TodoViewModel";
import {List} from "semantic-ui-react";


interface Props {
    todoList: Array<TodoViewModel>
    removeTodo: (id: string) => void
}

export class TodoList extends React.Component<Props> {

    render() {
        return (
            <List>
                {
                    this.props.todoList.map((todo) => {
                        return (
                            <List.Item key={todo.id}>
                                <TodoItem todo={todo} handleRemove={this.props.removeTodo} />
                            </List.Item>
                        );
                    })
                }
            </List>
        )
    }
}