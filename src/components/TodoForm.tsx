import * as React from "react";
import * as ShortId from "shortid";
import {TodoViewModel} from "./App";

interface Props {
    onTodoSubmit: (todo: TodoViewModel) => void
}

interface State {
    title: string
}

export class TodoForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {title: ''};
    }

    handleSubmit = (): void => {
        const title = this.state.title.trim();
        if (!title) {
            return;
        }
        this.props.onTodoSubmit({
            id: ShortId.generate(),
            title: this.state.title
        });
        this.setState({title: ''});
    };

    handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({title: event.target.value});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type={"text"} value={this.state.title} onChange={this.handleInput} />
                <button type={"submit"}>Button</button>
            </form>
        )
    }
}