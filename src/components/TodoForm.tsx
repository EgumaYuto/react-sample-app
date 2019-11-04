import * as React from "react";
import * as ShortId from "shortid";
import {TodoViewModel} from "./App";

interface Props {
    onTodoSubmit: (todo: TodoViewModel) => void
}

export class TodoForm extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    handleSubmit = (): void => {
        this.props.onTodoSubmit({
            id: ShortId.generate(),
            title: 'Added TODO'
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={"text"} />
                <button type={"submit"}>Button</button>
            </form>
        )
    }
}